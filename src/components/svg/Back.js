import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import Svg, {Path} from 'react-native-svg';
import {withNavigation} from 'react-navigation';

class Back extends Component {
	constructor(props){
		super(props)
	}

	goBack(){
		this.props.navigation.goBack()
	}

	render(){
		return (
			<View style={Styles.mid}>
				<TouchableOpacity onPress={() => this.goBack()}>
				  	<Svg width={13.765} height={25} viewBox="0 0 6.474 11.759" {...this.props}>
					   <Path
					      d="M.172 5.46L5.46.174a.596.596 0 0 1 .84 0 .592.592 0 0 1 0 .838L1.432 5.88 6.3 10.746a.593.593 0 1 1-.84.84L.17 6.298a.6.6 0 0 1 0-.84z"
					      fill="#fff"
					   />
					</Svg>
				</TouchableOpacity>
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	mid: {
		flex: 1,
		alignItems: 'center',
		width: 50,
		justifyContent: "center"
	}
})

export default withNavigation(Back)
