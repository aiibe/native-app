import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import ScaleImage from './ScaleImage'

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
				<View style={Styles.info}>
					<TouchableOpacity onPress={() => this.goToPost()}>
						<Text>23 Comments</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 20,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: "#161719",
		padding: 10
	},
	info: {
		padding: 10
	}
})

export default withNavigation(Post)