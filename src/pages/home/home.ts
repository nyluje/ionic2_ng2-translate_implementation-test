import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
  }

}
