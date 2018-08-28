import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {withNavigation} from 'react-navigation';

class ScaleImage extends Component {
	constructor(props){
		super(props)
		this.state = {
			style: {
				height: 300,
				width: Dimensions.get('window').width
			}
		}
	}

	componentDidMount(){
		// Update correct size for images
		const screenWidth = Dimensions.get('window').width
		Image.getSize(this.props.source, (srcWidth, srcHeight) => {
			const height = srcHeight * screenWidth / srcWidth
			const style = { height,	width: screenWidth }
			this.setState({style})
		})
	}

	viewFullImage(){
		// Open fullscreen image
		this.props.navigation.navigate(
			"FullScreen",
			{
				source: {
					uri: this.props.source,
					style: this.state.style
				}
			}
		)
	}

	render(){
		return (
			<TouchableOpacity onPress={() => this.viewFullImage()} activeOpacity={1}>
				<FastImage
					resizeMode={FastImage.resizeMode.contain}
					style={this.state.style}
					source={{uri: this.props.source}}
					/>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(ScaleImage)