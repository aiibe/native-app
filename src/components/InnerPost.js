import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import ScaleImage from './ScaleImage'

class InnerPost extends Component {

	render(){
		return (
			<View style={Styles.container}>
				<Text style={Styles.title}>{this.props.item.title}</Text>
				<ScaleImage
					onPress={() => this.viewImage()}
					source={this.props.item.media} />
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
	info: {
		padding: 10
	}
})

export default withNavigation(InnerPost)