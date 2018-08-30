import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import ScaleImage from './ScaleImage';
import PostMeta from './PostMeta';

class Post extends Component {
	constructor(props){
		super(props)
		this.state = {
			liked: false,
			authorized: true,
			showHeart: false
		}
	}

	goToPost(){
		this.props.navigation.navigate(
			"Post",
			{item: this.props.item}
		)
	}

	goToLogin(){
		this.props.navigation.navigate("Login")
	}

	undoShowHeart(){
		setTimeout(
			() => this.setState({showHeart: !this.state.showHeart}),
			800 // 0.8 seconds
		)
	}

	upVote(){
		if (!this.state.authorized){
			this.goToLogin()
		} else {
			if (this.state.liked == true){
				this.setState({liked: !this.state.liked })
			}
			else {
					this.setState(
					{liked: !this.state.liked, showHeart: true},
					() => this.undoShowHeart()
				)
			}
		}
	}


	render(){
		return (
			<View style={Styles.container}>
				<TouchableOpacity onPress={() => this.goToPost()}>
					<Text style={Styles.title}>{this.props.item.title}</Text>
				</TouchableOpacity>
				<ScaleImage
					showHeart={this.state.showHeart}
					onDoubleTap={() => this.upVote()}
					source={this.props.item.media} />
				<PostMeta
					liked={this.state.liked}
					source={this.props.item}
					onUpVote={() => this.upVote() }/>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 20,
		backgroundColor: '#333333'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: "#fff",
		padding: 10
	},
	info: {
		padding: 10
	}
})

export default withNavigation(Post)