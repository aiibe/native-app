import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';


import {Text} from 'react-native';

// Components
import InnerPost from '../components/InnerPost';
import Comments from '../components/Comments';
import Back from '../components/svg/Back';


class PostScreen extends Component {
	// Header bar
	static navigationOptions = {
	   headerTitle: "Post", // <Logo />,
	   headerTitleStyle: {color: '#fff'},
	   headerStyle: {backgroundColor: "#212121"},
	   headerLeft: (<View><Back /></View>), 
	   headerRight: (<View></View>)
	}

	render(){
		return (
			<ScrollView style={Styles.container}>
				<InnerPost item={this.props.navigation.getParam("item")} />
				<Comments comments={this.props.navigation.getParam("item").comments}/>
			</ScrollView>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		backgroundColor: "#212121"
	}
})

export default PostScreen