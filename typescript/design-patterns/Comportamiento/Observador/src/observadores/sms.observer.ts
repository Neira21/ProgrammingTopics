import type { Observer } from "../implemtentaciones/observer.interface.js";
import { Order } from "../carrito-compras.js";

export class SmsObserver implements Observer {
  update(message: Order): void {
    //TODO
    const total = message.items.reduce(
      (acc, item) => acc + item.unitPrice * item.quantity,
      0
    );
    console.log(
      `SMS: Your order # ${
        message.id
      } has been approved. Total: $${total.toFixed(2)}`
    );
  }
}
