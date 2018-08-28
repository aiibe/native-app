import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


class LoginScreen extends Component {
	static navigationOptions = {
		headerTitle: "Login"
	}

	render(){
		return (
			<View style={Styles.container}>
				<Text style={{color:'#fff'}}>
					Join the community
				</Text>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333"
	}
})

export default LoginScreen