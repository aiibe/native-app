/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Navigator from './Navigator';
import {name as appName} from './app.json';

// Store
import {Provider} from 'react-redux';
import store from './src/store';

// Background Messaging
import BgMessaging from './BgMessaging'


class Mapper extends Component {
	componentDidMount(){

	}

	render(){
		return(
			<Provider store={store}>
				<Navigator />
			</Provider>
		)
	}
}

AppRegistry.registerComponent(appName, () => Mapper);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => BgMessaging);
