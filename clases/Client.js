/* 

1) Idear una clase con la estructura que va a tener cada objeto “Client”. 
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para 
generar un nuevo cliente. 
Se debe contemplar que cada cliente va a tener, mínimamente: 
a. ID del cliente. 
b. DNI (no puede usarse como ID ya que existen DNIs repetidos). 
c. Contraseña para acceder al home banking. Como nombre de usuario vamos a utilizar el DNI. 
d. Nombre del cliente. 
e. Apellido del cliente. 
f. Saldo de su caja de ahorro en pesos. Puede ser positivo o negativo. 
g. Saldo de su caja de ahorro en dólares. Siempre debe ser un valor positivo.
*/
/* 
 Genere, a partir de instanciar la clase, un vector de objetos “clients” con unos cuántos clientes de ejemplo que se generen automáticamente al abrir la página web
*/

const clients = [
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Alberto",
    lastName: "Sambrana",
    mountPesos: 156902,
    mountDolar: 23000,
  },
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Julio",
    lastName: "Campo",
    mountPesos: 18902,
    mountDolar: 23000,
  },
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Alberto",
    lastName: "Samid",
    mountPesos: 26902,
    mountDolar: 29000,
  },
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Alberto",
    lastName: "Sambrana",
    mountPesos: 15619902,
    mountDolar: 23000,
  },
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Alberto",
    lastName: "Sambrana",
    mountPesos: 156902,
    mountDolar: 23000,
  },
  {
    id: 1,
    dni: 15789456,
    password: 123456,
    name: "Alberto",
    lastName: "Sambrana",
    mountPesos: 156902,
    mountDolar: 23000,
  },
];

class Client {
  constructor() {
    this.id;
    this.dni;
    this.password;
    this.name;
    this.lastName;
    this.mountPesos;
    this.mountDolar;
  }
  /*  Agregar a la clase Client un método para extraer dinero de una caja de ahorros de la cuenta bancaria.
        El método debe recibir cuánta plata se desea retirar y de qué caja (si la de pesos o la de dólares).
        En caso de que se desee retirar de la caja de ahorros en dólares se debe verificar que haya saldo 
        suficiente antes de hacer la extracción.
        En cambio, de la caja de ahorro en pesos se puede extraer aunque no haya saldo suficiente (se 
            utilizará el “descubierto”, quedando con saldo negativo)
            */
  /**
   *
   * @param {*} money
   * @param {*} type
   * @returns {boolean}
   */

  retirarDinero(money, type) {
    /* 
        En caso de que se desee retirar de la caja de ahorros en dólares se debe verificar que haya saldo suficiente antes de hacer la extracción. 
    */

    /* ¿Estamos retirando dolares? */
    if (type === "dollar") {
      /* ¿El monto el dolares es mayor a lo que se quiere retirar? */
      if (this.mountDolar > money) {
        this.mountDolar = money - this.mountDolar;
        return true;
      }
      return false;
    }

    this.mountPesos = money - this.mountPesos;
    return true;
  }

  /**   Agregar a la clase Client un método para ingresar dinero a la caja de ahorros de la cuenta bancaria.
   *    El método debe recibir cuánta plata se va a ingresar y a qué caja de ahorro (pesos o dólares).
   *    Este método devolverá el saldo que hay en la caja de ahorro luego de haber realizado el ingreso de dinero.
   */

  /**
   *
   * @param {*} money
   * @param {*} type
   */
  ingresarDinero(money, type) {
    if (type === "dollar") {
      this.mountDolar = this.mountDolar + money;
      return this.mountDolar;
    }
    this.mountPesos = this.mountPesos + money;
    return this.mountPesos;
  }
}
