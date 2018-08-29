import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import ScaleImage from './ScaleImage';
import PostMeta from './PostMeta';

class Post extends Component {

	goToPost(){
		this.props.navigation.navigate(
			"Post",
			{item: this.props.item}
		)
	}

	render(){
		return (
			<View style={Styles.container}>
				<TouchableOpacity onPress={() => this.goToPost()}>
					<Text style={Styles.title}>{this.props.item.title}</Text>
				</TouchableOpacity>
				<ScaleImage	source={this.props.item.media} />
				<PostMeta source={this.props.item} />
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