import React from 'react';
import { StyleSheet, Text, Button, View, Modal } from 'react-native';
import TestComponent from './TestComponent';

export default class App extends React.Component {

  state = {
    visible: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
          <TestComponent />
        </Modal>
        <Button title={'SHOW MODAL'} onPress={() => this.setState({visible: true})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
