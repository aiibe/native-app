import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {withNavigation} from 'react-navigation';

// Components
import Liked from "./svg/Liked";


class ScaleImage extends Component {
	constructor(props){
		super(props)
		this.state = {
			style: {
				height: 300,
				width: Dimensions.get('window').width
			},
			lastPress: 0
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

	doubleTap(){
	    let delta = new Date().getTime() - this.state.lastPress;
	    if(delta < 200) {
	      this.props.onDoubleTap()
	    }
	    this.setState({
	      lastPress: new Date().getTime()
	    })
	} 


	render(){
		return (
			<TouchableOpacity
				onPress={() => this.doubleTap()}
				activeOpacity={1}>
				{
					this.props.showHeart ?
						<View style={Styles.heart}>
							<Liked width={50} height={50} style={{elevation:3}}/>
						</View>
						:
						null
				}
				
				<FastImage
					resizeMode={FastImage.resizeMode.contain}
					style={this.state.style}
					source={{uri: this.props.source}}
					/>
			</TouchableOpacity>
		)
	}
}

const Styles = StyleSheet.create({
	heart: {
		flex:1,
		position:'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent:'center',
		alignItems:'center',
		zIndex:200,
	}
})

export default withNavigation(ScaleImage)