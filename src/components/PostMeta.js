import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import Like from '../components/svg/Like';
import Liked from '../components/svg/Liked';


class PostMeta extends Component {
	constructor(props){
		super(props)
		this.state = {
			liked: false
		}
	}

	authorized(){
		return true
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
		} else {
			this.setState({liked:true})
		}
	}

	render(){
		const item = this.props.source
		return (
			<View style={Styles.info}>
				<View style={Styles.votes}>
					{
						this.state.liked ? 
						<Liked onPress={() => this.upVote()} />
						:
						<Like onPress={() => this.upVote()} />
					}
					<Text style={Styles.likesCount}>{item.likes}</Text>
				</View>
				<TouchableOpacity onPress={() => this.goToPost()}>
					<Text style={Styles.comments}>{item.comments.length} Comments</Text>
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
		width: "20%",
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	likesCount: {
		color: "#fff",
		marginLeft: 10,
	}, 
	comments: {
		color: '#fff'
	}
})

export default withNavigation(PostMeta)