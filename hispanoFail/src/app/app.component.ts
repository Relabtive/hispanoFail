import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Keyboard } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
        StatusBar.overlaysWebView(true); // let status bar overlay webview
        StatusBar.backgroundColorByHexString('#ED4F48'); // set status bar color


            /*
             * MODIFY BOOTSTRAP CODE BELOW
             * Disable the Ionic Keyboard Plugin scroll for iOS only
             * https://github.com/driftyco/ionic/issues/5571
             */
 
            //if (this.platform.is('ios')) {
                Keyboard.disableScroll(true);
            //}

      Splashscreen.hide();
    });
  }
}
