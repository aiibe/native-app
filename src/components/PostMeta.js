import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

class PostMeta extends Component {
	constructor(props){
		super(props)
	}

	authorized(){
		return false
	}

	goToPost(){
		this.props.navigation.navigate("Post", {item: this.props.source})
	}

	goToLogin(){
		this.props.navigation.navigate("Login")
	}

	upVote(){
		if (!this.authorized()){
			this.goToLogin()
		}
	}

	downVote(){
		if (!this.authorized()){
			this.goToLogin()
		}
	}

	render(){
		const item = this.props.source
		return (
			<View style={Styles.info}>
				<View style={Styles.votes}>
					<TouchableOpacity style={Styles.touch} onPress={() => this.upVote()}>
						<Text style={Styles.touch}>Upvote</Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.touch} onPress={() => this.downVote()}>
						<Text style={Styles.touch}>Downvote</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={Styles.touch} onPress={() => this.goToPost()}>
					<Text style={Styles.touch}>{item.comments} Comments</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	info: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		color: '#fff'
	},
	votes: {
		width: "35%",
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	touch: {
		color: "#fff"
	}
})

export default withNavigation(PostMeta)