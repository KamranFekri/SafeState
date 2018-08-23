import React from 'react';
import { StyleSheet, Text, Button, View, Modal } from 'react-native';
import SafeState from './SafeState';

export default class TestComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            x: 1
        }

        this.setSafeState = SafeState(this)
    }

    componentDidMountSafely(){
        this.getData()
    }

    getData(){
        setTimeout(() => this.setSafeState({x: 100}), 5000)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.x}</Text>
                <Button title={'SetSafeState'} onPress={() => this.setSafeState({x: this.state.x + 1})}/>
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