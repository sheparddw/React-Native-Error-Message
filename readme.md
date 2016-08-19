# React Native Error Message
This error message slides up to the bottom of the screen, waits for a time, then slides back off the screen.

To use this component, add the ErrorMessage component within your React Native project then import and use it as the last child of your root view. You can pass several props to it for customization.

## Props
* message (string, the text message to display.)
* messageStyles (object, styles to apply to the message text.)
* messageContainerStyles (object, styles to apply to the message container.)
* displayDuration (integer, default: 500, how long to display the message)
* animationDuration (integer, default: 6000, how long to animate the onto and off the screen)
