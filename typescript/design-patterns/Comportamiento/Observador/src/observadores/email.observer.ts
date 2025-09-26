import type { Observer } from "../implemtentaciones/observer.interface.js";
import { Order } from "../carrito-compras.js";

export class EmailObserver implements Observer {
  update(message: Order): void {
    console.log(`EMAIL: Your order #${message.id} has been approved.`);
  }
}
