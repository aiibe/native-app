import React, {Component} from "react";
import {View, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

class Liked extends Component {
	constructor(props){
		super(props)
	}

	unlike(){
		this.props.onPress()
	}

	render(){
		return (
			<View style={this.props.style}>
				<TouchableOpacity onPress={() => this.unlike()}>
				  	<Svg width={16} height={16} viewBox="0 0 28.224 24">
				    	<Path
				      	d="M26.578 2.815c-4.2-5.453-12.466-2.236-12.466 3.302 0-5.538-8.266-8.756-12.467-3.302C-2.696 8.452 1.583 18.328 14.112 24 26.64 18.327 30.919 8.452 26.578 2.815z"
				      	fill="#f05228"
				    	/>
				  	</Svg>
				 </TouchableOpacity>
			</View>
		)
	}
}

export default Liked