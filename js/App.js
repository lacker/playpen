import React, { Component } from 'react';
import EditorPlayer from './EditorPlayer';

const defaultValue = `import React, { AppRegistry, View, Text } from 'react-native'

const Root = () => {
  return (
    <Text>Hello there</Text>
  )
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => Root)`;

export default class App extends Component {
  render() {
    return (
      <EditorPlayer
        value={defaultValue}
        inputHeader={'Hello this is the header'}
        />
    );
  }
}
