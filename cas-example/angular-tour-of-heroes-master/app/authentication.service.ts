import { Injectable } from '@angular/core';
import { OidcClient } from 'oidc-client-js/OidcClient';

@Injectable()
export class AuthenticationService {
    private oidcClient;
    constructor() {
        var authenticationSettings = {
            //authority: 'http://localhost:5000/oidc',
            authority: 'http://localhost:8080/cas/oidc/',
            client_id: 'tour-of-heroes',
            redirect_uri: 'http://localhost:5000/oidc-client-sample.html',
            post_logout_redirect_uri: 'http://localhost:5000/oidc-client-sample.html',
            response_type: 'id_token token',
            scope: 'openid email roles',

            filterProtocolClaims: true,
            loadUserInfo: true
        };

        this.oidcClient = new Oidc.OidcClient(settings);
    }
}
