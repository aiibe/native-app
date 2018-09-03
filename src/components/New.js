import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

// Redux Store
import {connect} from 'react-redux';
import {newUpdates, getUpdates} from '../actions/Update';

// Firebase
import firebase from 'react-native-firebase';

// Actual Component
class New extends Component {
	constructor(props){
		super(props)
		this.messageListener = null
	}

	componentDidMount(){
		// console.log("componentDidMount --New")

		// Firebase
		firebase.messaging()
		.hasPermission()
		.then(enabled => {
		   if (enabled) {
		   	this.getDeviceToken()
		      this.listenOnMessage()
		   } else {
		   	this.requestPermission()
		   } 
		})
	}

	componentWillUnMount(){
		this.messageListener()
	}

	getDeviceToken(){
		firebase.messaging().getToken()
		  .then(fcmToken => {
		    if (fcmToken) {
		      console.log("Device token:", fcmToken)
		    } else {
		      console.log("No token !")
		    } 
		  });
	}

	listenOnMessage(){
		this.messageListener = firebase.messaging().onMessage( message => {
			this.props.dispatch(newUpdates())
		})
	}

	requestPermission(){
		console.log("Asking for permission")
		firebase.messaging().requestPermission()
		.then(() => {
			return this.listenOnMessage()
		})
		.catch(error => {
			console.log("Permission revoked", error)
		});
	}


	isVisible(){
		return (
			<TouchableOpacity
				onPress={() => this.props.dispatch(getUpdates())}
				style={Styles.container}>
				<Text style={Styles.text}>New Updates</Text>
			</TouchableOpacity>
		)
	}

	render(){
		return this.props.visible ? this.isVisible() : null
	}
}

const Styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		alignItems: 'center'
	},
	text: {
		color: "#fff",
		paddingTop: 20,
		paddingBottom: 20
	}
})

const mapStateToProps = state => {
	return {
		visible: state.update
	}
}

export default connect(mapStateToProps)(New)