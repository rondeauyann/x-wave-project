import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
    $('.burger').click(function(e){
      e.stopPropagation();
      $('.burger-nav').toggleClass('nav-active');
    });

    $('.burger-nav').click(function(e){
        e.stopPropagation();
    });

    $('body,html').click(function(e){
      $('.burger-nav').removeClass('nav-active');
    });
  }
}
