/** @format */
import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import App from './App';
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
				<App />
			</Provider>
		)
	}
}

AppRegistry.registerComponent(appName, () => Mapper);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => BgMessaging);
