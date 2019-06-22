import React from 'react';
import { StyleSheet, Text, Button, View, Modal } from 'react-native';
import SafeState from 'safe-state';

export default class TestComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            x: 1
        }

        this.setMountedState = SafeState(this)
    }

    componentDidMountSafely(){
        this.getData()
    }

    getData(){
        setTimeout(() => this.setMountedState({x: 100}), 5000)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.x}</Text>
                <Button title={'setMountedState'} onPress={() => this.setMountedState({x: this.state.x + 1}, () => console.log('callback'))}/>
            </View>
        )
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