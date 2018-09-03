import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Redux Store
import {connect} from 'react-redux';
import {fetchUpdates} from '../actions/Content';


// Components
import Post from './Post';
import New from './New';

class Content extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){	
		// Will fetch latest posts
		this.props.dispatch(fetchUpdates())
	}


	render() {
		return (
			<View style={Styles.container}>
				<New />
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
	// console.log("Content:", state)
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Content)