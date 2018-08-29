import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Components
import Post from './Post'

class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			localFakeData: [
				{id: 1, title:"Hello World", type:"image", media:"https://i.imgur.com/MBsU2jt.jpg", comments:{total: 113}, likes: 44 },
				{id: 2, title:"Narhuk thaeee", type:"image", media:"https://i.imgur.com/bW26VnN.jpg", comments:{total:75}, likes: 20 },
				{id: 3, title:"Wowww", type:"image", media:"https://i.imgur.com/WHnh74Q.jpg", comments:{total:267}, likes: 135 },
			]
		}
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