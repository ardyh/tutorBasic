import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default class BlinkApp extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      text: '',
      arrName: []
    };
  }

  onChange(){
    var newArray = this.state.arrName.slice();    
    newArray.push(this.state.text);   
    this.setState({arrName:newArray});
  }

  delChange(index){
    var newArr2 = this.state.arrName.slice();
    newArr2.splice(index,1);
    this.setState({arrName:newArr2});
  }

  render() {
    return (
      <View style={{paddingTop: 50}}>
        <View style={{flexDirection: 'row'}} >
          <View style={{flex: 2, backgroundColor: 'powderblue'}}> 
            <TextInput
              placeholder="Type here!"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <View style={{flex: 1}}>
            <Button
              title="Add"
              color="#841584"
              onPress={this.onChange}
            />
          </View>
        </View>

         <View>
          {this.state.arrName.map(
            (item, index) => {
              return <Button 
                key='index' 
                title={item}
                onPress={this.delChange.bind(this, index)}
                />;
            }
          )}
        </View>
      </View>w
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
   alignItems: 'center'
  },
  item: {
    //padding: 10,
    fontSize: 18,
    //height: 44
  }
})
