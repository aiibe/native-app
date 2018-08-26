import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Logo from './src/components/svg/logo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      styleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
    }
  }

  // Method accessible
  // via this.changeBackground()
  changeBackground(){
    const newStyleContainer = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }
    this.setState({ styleContainer: newStyleContainer })
  }


  render() {
    return (
      <View style={this.state.styleContainer}>
        <Logo style={{ marginBottom:20 }} />
        <Button
          onPress={() => this.changeBackground() } 
          title="Tap to change background color" />
      </View>
    );
  }
}

export default App