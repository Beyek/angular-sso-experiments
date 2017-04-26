import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { AuthenticationService } from './authentication.service';
//import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AuthenticationService,
    //OAuthModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    /*
    constructor(private oauthService : OAuthService) {
        this.oauthService.redirectUri = window.location.origin + '/index.html';
        this.oauthService.clientId = 'tour-of-heroes';
        this.oauthService.scope = 'openid profile email heroes';
        this.oauthService.oidc = true;

        // The name of the auth-server that has to be mentioned within the token
        //this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";
        this.oauthService.issuer = "http://localhost:8080/cas/oidc/";
        
        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument().then(() => {
 
            // This method just tries to parse the token(s) within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't send the user the the login page
            this.oauthService.tryLogin({});      
        });
    }
    */
}
