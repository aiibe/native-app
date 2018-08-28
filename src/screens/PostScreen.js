import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

// Components
import InnerPost from '../components/InnerPost'


class PostScreen extends Component {
	static navigationOptions = {
		headerTitle: "Post"
	}

	render(){
		return (
			<ScrollView>
				<InnerPost item={this.props.navigation.getParam("item")} />
			</ScrollView>
		)
	}
}

export default PostScreen