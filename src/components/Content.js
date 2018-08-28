import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Components
import Post from './Post'

class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			localFakeData: [
				{id: 1, title:"Hello World", type:"image", media:"https://i.imgur.com/MBsU2jt.jpg" },
				{id: 2, title:"Narhuk thaeee", type:"image", media:"https://i.imgur.com/bW26VnN.jpg" },
				{id: 3, title:"Wowww", type:"image", media:"https://i.imgur.com/WHnh74Q.jpg" },
			]
		}
	}

	onScrolling(event){
		console.log("Scrolling to:", event.nativeEvent.contentOffset.y)
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
		backgroundColor: '#e4e4e4'
	}
})

export default Content