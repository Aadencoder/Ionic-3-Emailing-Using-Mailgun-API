ionic-angular-google-maps-example
=========================

Example of using angular-google-maps in an Ionic 3 app 

Example of using angular-google-maps in Ionic, to display data from an API.


Development
-----------

Do once to initialize the app:

    ionic platform add ios
    ionic platform add android

    ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"

    npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest

Do each time dependencies have changed:

    npm install


See the app in the browser:

    ionic serve

To see the app on a device, connect a device with USB and run using one of the following commands:

    ionic run android
    ionic run ios
