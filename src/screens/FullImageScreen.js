import React, {Component} from 'react';
import ZoomableImage from '../components/ZoomableImage';

class FullImageScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render(){
		const source = this.props.navigation.getParam("source")
		console.log("FullImageScreen", source)
		return (
			<ZoomableImage
				style={{flex: 1, backgroundColor: "#333" }}
				source={{uri: source.uri}}
				imageWidth={source.style.width}
				imageHeight={source.style.height} />
		)
	}
}

export default FullImageScreen