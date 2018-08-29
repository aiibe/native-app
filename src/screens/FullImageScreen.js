import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// Components
import ZoomableImage from '../components/ZoomableImage';
import Close from '../components/svg/Close';


class FullImageScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render(){
		const source = this.props.navigation.getParam("source")
		return (
			<View style={{flex:1}}>
				<Close style={Styles.close} />
				<ZoomableImage
					style={{flex: 1, backgroundColor:'#333'}}
					source={{uri: source.uri}}
					imageWidth={source.style.width}
					imageHeight={source.style.height} />
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	close: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 10,
		right: 10,
		zIndex: 1000,
		padding: 10
	}
})

export default FullImageScreen