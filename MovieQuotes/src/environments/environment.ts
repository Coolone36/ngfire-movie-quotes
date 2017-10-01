// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAXzFhh86YXRuKs4wmmxVMUcSY6Pe26zCw',
    authDomain: 'laritz-movie-quotes.firebaseapp.com',
    databaseURL: 'https://laritz-movie-quotes.firebaseio.com',
    projectId: 'laritz-movie-quotes',
    storageBucket: 'laritz-movie-quotes.appspot.com',
    messagingSenderId: '982362172913'
  },
};
