import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: 'rgb(194, 37, 44)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  message: {
    padding: 15,
    color: '#fff',
  },
});

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.displayDuration = this.props.displayDuration || 6000;
    this.animationDuration = this.props.animationDuration || 500;
    this.windowHeight = Dimensions.get('window').height;
    return this.showMessage();
  }

  componentWillReceiveProps(nextProps) {
    // Show message each time new props are given.
    this.showMessage();
    return nextProps;
  }

  getTranslateProperties() {
    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.windowHeight, 0],
    });
    return [{ translateY }];
  }

  // Animate onto view.
  showMessage() {
    return Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: this.animationDuration,
      }
    ).start(() => this.messageShown());
  }

  // Animate off view.
  hideMessage() {
    return Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: this.animationDuration,
      }
    ).start();
  }

  // Hide message after showing.
  messageShown() {
    return setTimeout(
      () => this.hideMessage(),
      this.displayDuration);
  }

  render() {
    // If no error, do not display.
    if (this.props.message) {
      const translateProps = this.getTranslateProperties();

      return (
        <Animated.View
          style={[
            styles.messageContainer,
            { transform: translateProps },
            this.props.messageContainerStyles || null,
          ]}
        >
          <Text
            style={[
              styles.message,
              this.props.messageStyles || null,
            ]}
          >
          {this.props.message}
          </Text>
        </Animated.View>
      );
    }
    return null;
  }
}

ErrorMessage.propTypes = {
  message: React.PropTypes.string,
  displayDuration: React.PropTypes.number,
  animationDuration: React.PropTypes.number,
  messageContainerStyles: React.PropTypes.object,
  messageStyles: React.PropTypes.object,
};

module.exports = ErrorMessage;
