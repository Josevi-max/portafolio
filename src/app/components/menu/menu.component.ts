import { Router } from '@angular/router'
import { Component, Input, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialColorService } from '../../services/special-color.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private translate: TranslateService, private specialColor: SpecialColorService, private router: Router) {
  }



  displayNone = '';

  actualLanguage = this.translate.getBrowserLang();

  actualRoute = this.router.url;

  specialActualColor = "text-" + this.specialColor.getSpecialColor();



  ngOnInit(): void {
    this.specialColor.specialColorObservable.subscribe(color => {
      this.specialActualColor = "text-"+ color;
    });

    this.router.events.subscribe((val) => {
      this.actualRoute = this.router.url;
    });
  }

  openMenu() {
    this.displayNone = this.displayNone ? '' : 'none';
  }


  toogleLanguage(lang: string) {
    this.translate.use(lang);
    this.actualLanguage = lang;
  }

}
