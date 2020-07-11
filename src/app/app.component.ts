import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'x-wave';
  translateService: TranslateService;

  constructor(translateService: TranslateService){
    this.translateService = translateService;
    translateService.setDefaultLang('fr');
  }

  changeLanguage() {
    console.log('changeLanguage()')
    this.translateService.use('en');
  }
}
