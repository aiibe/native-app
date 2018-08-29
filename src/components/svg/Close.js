import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import Svg, {Path} from 'react-native-svg';
import {withNavigation} from 'react-navigation';

class Close extends Component {
	constructor(props){
		super(props)
	}

	goBack(){
		this.props.navigation.goBack()
	}

	render(){
		return (
			<View style={this.props.style}>
				<TouchableOpacity onPress={() => this.goBack()}>
				  	<Svg width={16} height={16} viewBox="0 0 25 25">
				    	<Path
				    		d="M15.186 12.49l9.26-9.26A1.89 1.89 0 1 0 21.77.554l-9.26 9.26L3.25.554A1.89 1.89 0 1 0 .575 3.23l9.26 9.26-9.281 9.28A1.89 1.89 0 0 0 1.892 25c.484 0 .968-.184 1.338-.555l9.28-9.28 9.26 9.26a1.889 1.889 0 0 0 2.675 0 1.89 1.89 0 0 0 0-2.676l-9.26-9.26z"
				      	fill="#fff"
				    	/>
				  </Svg>
				</TouchableOpacity>
			</View>
		)
	}
}

export default withNavigation(Close)

