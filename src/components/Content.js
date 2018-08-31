import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Redux Store
import {connect} from 'react-redux';
import {init} from '../actions/Content';

// Server requests
import axios from 'axios';
import {source} from '../../Settings';

// Components
import Post from './Post'

class Content extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		axios.get(source.fakePosts)
		// TODO : Check error response  
		.then( response => {
			const posts = [...response.data.posts] // Map response.data.posts to redux store
			this.props.initLoad(posts) // Update our state
		})
	}

	render() {
		return (
			<View style={Styles.container}>
				<FlatList
					data={this.props.posts}
					keyExtractor={(item) => item.id.toString() }
					renderItem={ ({item}) => <Post item={item} /> }
					/>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#212121'
	}
})


// Connect to Redux Store
const mapStateToProps = state => {
	console.log("Content:", state)
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initLoad: posts => dispatch(init(posts))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)