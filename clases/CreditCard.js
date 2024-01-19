/* 
dear una clase con la estructura que va a tener cada objeto “CreditCard”.
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para 
generar una nueva tarjeta de crédito.
NOTA: En una aplicación real, normalmente hay una clase “Card” y de ella se heredan las “Debit” y 
las “Credit”, por tarjetas de débito y crédito respectivamente. Herencia es un tema que no tocamos 
en esta materia por la complejidad que representa en JavaScript.
Se debe contemplar que cada tarjeta de crédito va a tener, mínimamente:
a. ID de la tarjeta.
b. ID del cliente a quién le pertenece la tarjeta.
c. Proveedor de la tarjeta (VISA, MasterCard, American Express).
d. Fecha de vencimiento de la tarjeta (solo se utiliza mes y año).
e. Saldo.
Este parámetro almacena la plata que el cliente le debe al banco, por no haber pagado aún 
la tarjeta de forma completa (esté al día o no).
Este monto puede ser positivo (si el cliente le debe plata al banco), cero (si se pagó todo al 
día) o negativo (si el cliente, cuando efectuó el pago de la tarjeta, pagó más de lo que debía)
f. Consumos en la tarjeta (vector de objetos instanciados de la clase del ejercicio 3).
*/

/* 
Genere, a partir de instanciar la clase, un vector de objetos “creditCards” con unas cuántas tarjetas 
de crédito asociadas a los clientes generados en el ejercicio anterior que se generen 
automáticamente al abrir la página web.
*/

const creditCards = [
  {
    idCaja: 1,
    idClient: 1,
    povider: "Visa",
    dateVto: "12/30",
    mount: 20369,
  },
  {
    idCaja: 2,
    idClient: 2,
    povider: "Visa",
    dateVto: "12/30",
    mount: 20369,
  },
  {
    idCaja: 3,
    idClient: 3,
    povider: "Visa",
    dateVto: "12/30",
    mount: 20369,
  },
  {
    idCaja: 4,
    idClient: 4,
    povider: "Visa",
    dateVto: "12/30",
    mount: 20369,
  },
  {
    idCaja: 5,
    idClient: 5,
    povider: "Visa",
    dateVto: "12/30",
    mount: 20369,
  },

];

class CreditCard {
  constructor() {
    this.idCaja;
    this.idClient;
    this.provider;
    this.dateVto;
    this.mount;
    this.Consumption;
  }
}
