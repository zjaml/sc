# Tech Decisions
## Abandon react-nativ-router-flux for NavigatorExperimental

Reason: 

react-nativ-router-flux is very popular and looks to be able to define all navigations in a single place. However it is very ill documented although looks otherwise. It seems to aimed for a goal that's too ambitious to make itself too complex and buggy. Even unnatural to do the basic things like jump around scenes of different branches. Turned out to be a time waster.

NavigatorExperimental on the other hand, is the future for react-native. It's similar to react-router for the web app, where all navigation state will be managed in a reducer making it very powerful and flexible, yet convenient to use. 

Tutorial:
https://medium.com/@dabit3/first-look-react-native-navigator-experimental-9a7cf39a615b#.hxrhhxw1y

Interesting way to control the transition animation using NavigationCard's direction prop.(Not fully supported yet)
https://github.com/ericvicenti/navigation-rfc/issues/3


# Issues

* React native map issue running on device
https://github.com/lelandrichardson/react-native-maps/issues/165

 Attempt to invoke virtual method 'android.content.res.Configuration android.content.res.Resources.getConfiguration()' on a null object reference

Tried this, didn't help 

 https://facebook.github.io/react-native/docs/running-on-device-android.html

The issue was discussed here, seems happening to some 3rd party customized android OS only. No fix worked. Such a pain in the ass.

Sony, E5823, E5823, 6.0
lge, LG-H410, cf_global_com, 5.1.1
htc, HTC One, xenonhd_m7, 6.0.1
docomo, SO-01H, SO-01H, 6.0
Vivo X7 5.1.1


* Build error when run react-native run-android after installed react-native-vector-icons. 
  * Fix: must follow the manual install process [here](https://github.com/oblador/react-native-vector-icons#android)

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



 