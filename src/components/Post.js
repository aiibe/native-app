import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';

class Post extends Component {
	render(){
		return (
			<View style={Styles.container}>
				<Text style={Styles.title}>{this.props.item.title}</Text>
				<Image
					width={Dimensions.get('window').width} 
					style={Styles.media} 
					source={{uri: this.props.item.media}} />
				<View style={Styles.info}>
					<Text>23 Comments</Text>
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
	media: {
		resizeMode: 'contain'
	},
	info: {
		padding: 10
	}
})

export default Post