import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from './models';
import * as minimist from 'minimist'

''

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  console.log(resultado);
  
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params)
  };
}

// ts-node source/index.ts --action save --params '{id:1, nombre:"Brunito"}' ejemplo de ejecucion
function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
  

}

main();
