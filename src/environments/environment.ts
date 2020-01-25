// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDW0Wd9i2aVcCd-BUSp5V9k7FCMDP9kwKI',
    authDomain: 'hello-heroes.firebaseapp.com',
    databaseURL: 'https://hello-heroes.firebaseio.com',
    projectId: 'hello-heroes',
    storageBucket: 'hello-heroes.appspot.com',
    messagingSenderId: '385562054185',
    appId: '1:385562054185:web:b3ebf092b0e075456b9638'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
