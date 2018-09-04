import firebase from 'react-native-firebase';
import store from './src/store';
import {newUpdates} from './src/actions/Update';

export default async message => {
		console.log("BgMessaging message:", message)
		store.dispatch(newUpdates())
	return Promise.resolve()
}