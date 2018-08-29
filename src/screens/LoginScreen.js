import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

// Components
import Back from '../components/svg/Back';


class LoginScreen extends Component {

	static navigationOptions = {
	   headerTitle: "Login",
	   headerTitleStyle: {color: '#fff'},
	   headerStyle: {backgroundColor: "#212121"},
	   headerLeft: (<View><Back /></View>), 
	   headerRight: (<View><Text style={{color: '#fff', paddingRight: 20}}>SIGN UP</Text></View>)
	}

	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}


	render(){
		return (
			<View style={Styles.container} >
				<Text style={Styles.title}>Join the community</Text>
				<TextInput 
					style={Styles.input}
					placeholder="Email"
					onChangeText={(text) => this.setState({email: text})} 
					value={this.state.email} />
				<TextInput 
					style={Styles.input}
					placeholder="Password"
					onChangeText={(text) => this.setState({password: text})} 
					value={this.state.password} />
				<Button onPress={() => console.log("Request login")} title="Sign In" />
				<Text style={Styles.separator}>OR</Text>
				<Button onPress={() => console.log("Request login")} title="Continue with Facebook" />
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333",
		paddingLeft: 30,
		paddingRight: 30
	},
	title: {
		fontSize: 20,
		color: '#fff',
		marginTop: 20,
		marginBottom: 20,
		textAlign: 'center'
	},
	input: {
		backgroundColor: '#fff',
		borderRadius: 5,
		marginBottom: 20,
		paddingLeft: 10,
		paddingRight: 10
	},
	separator: {
		marginTop: 20,
		marginBottom: 20,
		color: '#fff',
		textAlign: 'center'
	}
})

export default LoginScreen