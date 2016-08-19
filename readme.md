# React Native Error Message
This error message slides up to the bottom of the screen, waits for a time, then slides back off the screen.

To use this component, clone this repo within your React Native project then import and use it as the last child of your root view. You can pass several props to it for customization.

## Props
* message (string, the text message to display.)
* messageStyles (object, styles to apply to the message text.)
* messageContainerStyles (object, styles to apply to the message container.)
* displayDuration (integer, default: 500, how long to display the message)
* animationDuration (integer, default: 6000, how long to animate the onto and off the screen)

## Example Usage
At the top of your view file:
```
// Update below to wherever you cloned this repo relative to your root View file.
import ErrorMessage from './ReactNativeErrorMessage/ErrorMessage';
```

Within your root view's render function:
```
<View>
  <MyRouter />
  <ErrorMessage
    message="My Error Message"
    messageContainerStyles={{ backgroundColor: 'yellow' }}
    animationDuration={500}
  />
</View>
```
Note that the ErrorMessage must be the last component within the root view to display on top of other components properly.
The Position is absolute by default, so it should not disrupt other component styling.
This is only tested on iOS.
Feel free to contribute to this component.
