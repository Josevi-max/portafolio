import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudiesComponent } from './components/studies/studies.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsComponent } from './components/settings/settings.component';
import { SpecialColorService } from './services/special-color.service';
import { QualificationComponent } from './components/qualification/qualification.component';
import { TitleEffectComponent } from './components/title-effect/title-effect.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProyectsComponent,
    StudiesComponent,
    HomeComponent,
    MenuComponent,
    SettingsComponent,
    QualificationComponent,
    TitleEffectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  
  ],
  providers: [SpecialColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
