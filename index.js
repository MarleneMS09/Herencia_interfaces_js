/*Importación de clases*/
import {Cliente} from './Cliente.js';
//import {CuentaCorriente} from './CuentaCorriente.js';
//import { CuentaAhorro } from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001');
const cuentaDeMaria = new Cuenta(cliente2,'2','002');

const cuentaAhorroLeonardo = new Cuenta(cliente, '9985', '001', 0);
console.log(cuentaDeLeonardo);
console.log(cuentaAhorroLeonardo);



/*let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas);

console.log(CuentaCorriente.cantidadCuentas);

*/


