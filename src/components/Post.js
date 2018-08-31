import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

// Connect to Redux Store
import {connect} from 'react-redux';
import {like, unlike} from '../actions/Content';

// Components
import ScaleImage from './ScaleImage';
import PostMeta from './PostMeta';

class Post extends Component {
	constructor(props){
		super(props)
		this.state = {
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
			400 // 0.8 seconds
		)
	}

	upVote(){
		if (!this.props.auth){
			this.goToLogin()
		} else {
			if (this.props.item.liked == true){
				this.props.unlike(this.props.item)
			}
			else {
				this.props.like(this.props.item)
				this.setState({showHeart: true},	() => this.undoShowHeart())
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

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		like: post => dispatch(like(post)),
		unlike: post => dispatch(unlike(post))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Post))