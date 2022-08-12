import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AboutComponent } from './components/about/about/about.component';
import { ExperienceComponent } from './components/experience/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { CapsuleComponent } from './components/capsule/capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    CapsuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
