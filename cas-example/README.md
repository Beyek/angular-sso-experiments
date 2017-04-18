# Running the example

The CAS instance (under the `cas-overlay-template-master`) requires a Tomcat
install. Tomcat 9 will not work due to compatibility issues with CAS. It should
run fairly well out of the box. The current CAS code runs over HTTP, not HTTPS.

The `angular-tour-of-heroes-master` is the Angular example application with
some additions to force authentication through OIDC. `npm install && npm start`
can be used to kick off the application.
