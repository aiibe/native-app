// Actions
import axios from 'axios';
import SInfo from 'react-native-sensitive-info';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {source} from '../../Settings';

function getServerKeys(token, id, dispatch){
	axios.post(source.authToken, {accessToken: token, user: id})
	.then( res => {
		console.log("localTest", res.data)
		setConfidential(res.data.refreshToken)
		// getConfidential()
		dispatch({type:"AUTH_RECEIVED", payload: res.data.accessToken})
	})
	.then(() => {
		LoginManager.logOut()
		console.log("Logout Facebook")
	})
	.catch( err => {
		console.log("localTest error", err)
		if (err.response) {
			console.log("localTest error msg", err.response.data.message)
		} else {
			console.log("localTest error CHECK CONNECTION FAILED AND RETRY")
		}
	})
}

function setConfidential(token){
	console.log("setConfidential", token)
	SInfo.setItem('refresh', token, {});
}

function getConfidential(){
	SInfo.getItem('refresh', {})
	.then(value => console.log("getConfidential", value));
}

function getLoginAccessToken(dispatch){
	AccessToken.getCurrentAccessToken()
	.then( data => {
		console.log("AccessToken:", data)
		if (data) {
			return getServerKeys(data.accessToken, data.userID, dispatch)
		}
	})
}

export function loginWithFacebook(){
	return dispatch => {
		LoginManager.logInWithReadPermissions(['email','public_profile'])
		.then( result => {
			if (result.isCancelled) {
				console.log('Login cancelled')
			} else {
				console.log('Login success with permissions:', result);
				getLoginAccessToken(dispatch)
			}
		}, error => {
			console.log('Login fail with error: ' + error)
		})
	}
}