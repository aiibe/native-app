import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

// Connect to Redux Store
import {connect} from 'react-redux';

// Components
import Post from '../components/Post';
import Comments from '../components/Comments';
import Back from '../components/svg/Back';


class PostScreen extends Component {
	// Header bar
	static navigationOptions = {
	   headerTitle: "Discussion", // <Logo />,
	   headerTitleStyle: {color: '#fff'},
	   headerStyle: {backgroundColor: "#212121"},
	   headerLeft: (<View><Back /></View>), 
	   headerRight: (<View></View>)
	}

	getPost(){
		return this.props.posts.find((post, index) => {
			return post.id == this.props.navigation.getParam("item").id
		})
	}

	render(){
		const post = this.getPost()
		return (
			<ScrollView style={Styles.container}>
				<View style={Styles.wrap}>
					<Post item={post} />
					<Comments comments={post.comments}/>
				</View>
			</ScrollView>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		backgroundColor: "#212121"
	},
	wrap: {
		flex: 1,
		marginBottom: 20,
		backgroundColor: '#333333'
	},
})

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostScreen)