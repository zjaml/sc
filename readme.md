Issues
* Cannot evaluate module react-native-maps : Configuration with name 'default' not found
https://github.com/lelandrichardson/react-native-maps/issues/288

  * Fix: 

You must remove :react-native-maps from build.gradle and add

```
...
dependencies {
  ...
  compile 'com.airbnb.android:react-native-maps:0.7.1'
}
```

also manually patch your Application class like

```
return Arrays.asList(
          new MainReactPackage(),
          new MapsPackage());
```

I think it will really help you

But now we can't use the rnpm link: after every call, build.gradle breaks down again (we can repair it manually)


* React native map issue running on device
https://github.com/lelandrichardson/react-native-maps/issues/165

 Attempt to invoke virtual method 'android.content.res.Configuration android.content.res.Resources.getConfiguration()' on a null object reference

Tried this, didn't help 

 https://facebook.github.io/react-native/docs/running-on-device-android.html

 