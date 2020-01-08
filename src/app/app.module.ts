import { NgModule } from '@angular/core';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatExpansionModule, MatChipsModule, MatDividerModule, MatGridListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { StreamingComponent } from './views/streaming/streaming.component';
import { AppRoutingModule } from './app.routing';
import { ComingSoonComponent } from './views/home/coming-soon/coming-soon.component';
import { BiographyComponent } from './views/biography/biography.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Doug Williamson',
        version: '1.0.0-beta.4',
        logoUrl: undefined,
        logoLetters: 'DW',
        twitterUrl: 'https://twitter.com/Rhombus_TV_',
        changelogUrl: 'https://github.com/doug-williamson/doug-williamson/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        firebaseConfig: undefined,
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
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
