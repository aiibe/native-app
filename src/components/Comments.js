import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

// Each Comment component
class Comment extends Component {
	render(){
		const comment = this.props.item
		return (
			<View style={Styles.comment}>
				<Text style={Styles.author}>{comment.author}</Text>
				<Text style={Styles.say}>{comment.say }</Text>
			</View>
		)
	}
}

// FlatList will render each Comment component (see above)
class Comments extends Component {
	render(){
		const comments = this.props.comments
		return (
			<View style={Styles.container}>
				<Text style={Styles.title}>COMMENTS</Text>
				<FlatList
					style={Styles.comments}
					data={comments}
					keyExtractor={(item) => item.id.toString() }
					renderItem={ ({item}) => <Comment item={item} /> }
					/>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 20,
		backgroundColor: '#212121'
	},
	title: {
		color: "#fff",
	},
	comments: {
		marginTop: 20
	},
	comment: {
		marginBottom: 20
	},
	author: {
		color: '#fff',
		fontWeight: 'bold'
	},
	say: {
		color: "#fff"
	}
})

export default Comments