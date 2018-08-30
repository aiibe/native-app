import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Server requests
import axios from 'axios';
import {source} from '../../Settings';

// Components
import Post from './Post'

class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			localFakeData: []
		}
	}

	componentDidMount(){
		axios.get(source.fakePosts)
		// TODO : Check error response  
		.then( response => {
			const localFakeData = [...response.data.posts] // Map response.data.posts to localFakeData
			this.setState({ localFakeData }) // Update our state localFakeData
		})
	}

	render() {
		return (
			<View style={Styles.container}>
				<FlatList
					data={this.state.localFakeData}
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

export default Content