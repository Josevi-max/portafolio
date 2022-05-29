import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpecialColorService } from '../../services/special-color.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private translate: TranslateService, private specialColor: SpecialColorService) { }

  ngOnInit(): void {

  }

  actualSpecialColor = this.specialColor.getSpecialColor();

  public isCollapsed = true;
  
  public actualLanguage = this.translate.getBrowserLang();

  toogleLanguage(lang: string) {
    this.translate.use(lang);
    this.actualLanguage = lang;
    
  }

  changeSpecialColor(color: string) {
    this.specialColor.setSpecialColor(color);
    this.actualSpecialColor = color;
  }
}
