import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './the-header/the-header.component';
import { HeroComponent } from './hero/hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RatesComponent } from './rates/rates.component';
import { ExperienceComponent } from './experience/experience.component';
import { TradeComponent } from './trade/trade.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

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
