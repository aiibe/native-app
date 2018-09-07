import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

// Redux Store
import {connect} from 'react-redux';
import {loginWithFacebook} from '../actions/Auth'

// Components
import Back from '../components/svg/Back';


class LoginScreen extends Component {

	static navigationOptions = {
	   headerTitle: "Login",
	   headerTitleStyle: {color: '#fff'},
	   headerStyle: {backgroundColor: "#212121"},
	   headerLeft: (<View><Back /></View>), 
	   headerRight: (<View></View>)
	}

	constructor(props){
		super(props)
	}

	greeting(){
		return(
			<View style={Styles.container}>
				<Text>Welcome back buddy !</Text>
			</View>
		)
	}

	signIn(){
		return(
			<View style={Styles.container}>
				<Button
					onPress={() => this.props.dispatch(loginWithFacebook())}
					title="Continue with Facebook"
				/>
			</View>
		)
	}

	render(){
		return this.props.auth ? this.greeting() : this.signIn()
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333",
		paddingLeft: 30,
		paddingRight: 30
	}
})

const mapStatetoProps = state => {
	return {
		auth: state.auth
	}
}


export default connect(mapStatetoProps)(LoginScreen)