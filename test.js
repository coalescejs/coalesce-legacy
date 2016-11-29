import 'mocha';
import 'mocha-lazy-bdd';
//import 'testem.js';

mocha.setup('lazy-bdd');

System.import('coalesce-legacy-tests').then(() => {
  mocha.run();
});
