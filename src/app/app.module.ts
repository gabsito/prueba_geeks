import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RatesComponent } from './components/rates/rates.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TradeComponent } from './components/trade/trade.component';
import { BlogComponent } from './components/blog/blog.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    HeroComponent,
    WelcomeComponent,
    RatesComponent,
    ExperienceComponent,
    TradeComponent,
    BlogComponent,
    TestimonialsComponent,
    DownloadAppComponent,
    FooterComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
