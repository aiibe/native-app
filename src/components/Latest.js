import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

// Redux Store
import {connect} from 'react-redux';
import {fetchUpdates} from '../actions/Content';

// Components
import Post from './Post';
import New from './New';

class Latest extends Component {
	constructor(props){
		super(props)
	}

	static navigationOptions = {
		header: null
	}

	componentDidMount(){	
		// Should fetch cached version of state in AsyncStorage
	}


	render() {
		return (
			<View style={Styles.container}>
				<New />
				<FlatList
					data={this.props.posts}
					keyExtractor={(item) => item.id.toString() }
					renderItem={ ({item}) => <Post item={item} /> }
					refreshing={this.props.loading}
					onRefresh={() => this.props.dispatch(fetchUpdates())}
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
	// console.log("Latest:", state)
	return {
		posts: state.posts.items,
		loading: state.posts.loading
	}
}

export default connect(mapStateToProps)(Latest)