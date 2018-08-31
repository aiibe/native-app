import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import Like from '../components/svg/Like';
import Liked from '../components/svg/Liked';


class PostMeta extends Component {

	goToPost(){
		this.props.navigation.navigate("Post", {item: this.props.source})
	}

	render(){
		const item = this.props.source
		return (
			<View style={Styles.info}>
				<View style={Styles.votes}>
					{
						this.props.source.liked ? 
							(<Liked onPress={() => this.props.onUpVote()} />)
							:
							(<Like onPress={() => this.props.onUpVote()} />)
					}
					<Text style={Styles.likesCount}>{item.likes}</Text>
				</View>
				<TouchableOpacity onPress={() => this.goToPost()}>
					<Text style={Styles.comments}>{item.comments.length} Comments</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	info: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		color: '#fff'
	},
	votes: {
		width: "20%",
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	likesCount: {
		color: "#fff",
		marginLeft: 10,
	}, 
	comments: {
		color: '#fff'
	}
})


export default withNavigation(PostMeta)