import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  constructor (private translate: TranslateService) {
    this.setAppLanguage();
  }
  setAppLanguage() {
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang() ?? '');
  }
  
}


