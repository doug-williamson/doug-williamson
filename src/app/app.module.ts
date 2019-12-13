import { NgModule } from '@angular/core';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { StreamingComponent } from './views/streaming/streaming.component';
import { AppRoutingModule } from './app.routing';
import { ComingSoonComponent } from './views/home/coming-soon/coming-soon.component';
import { BiographyComponent } from './views/biography/biography.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Doug Williamson',
        version: '1.0.0-beta.0',
        logoUrl: '/assets/images/doug_williamson.jpg',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/Rhombus_TV_',
      },
    }),

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ExperienceComponent,
    HomeComponent,
    StreamingComponent,
    ComingSoonComponent,
    BiographyComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
