import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import * as counterActions from "../actionCreators/counter";
import { stringify } from "querystring";
import { State } from "react-native-gesture-handler";

class Counter extends Component {
  render() {
    return (
      <View>
        <Button title="INC" onPress={this.props.inc} />
        <Text>{this.props.ctr}</Text>
        <Button title="DEC" onPress={this.props.dec} />
        <Button title="ALT" onPress={this.props.alt} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ctr: state.counter,
    cars: state.cars,
    user: state.users
  };
}

mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(counterActions.incActionCreator(10)),
    dec: () => dispatch(counterActions.decActionCreator(10)),
    alt: (ctr) => dispatch(counterActions.altActionCreator(alert(ctr))),
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(Counter);