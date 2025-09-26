// Notificar un evento a los suscriptores

import { ShoppingCart, CartItem } from "./src/carrito-compras.ts";
import { EmailObserver } from "./src/observadores/email.observer.ts";
import { SmsObserver } from "./src/observadores/sms.observer.ts";

// Observers
const smsObserver = new SmsObserver();
const emailObserver = new EmailObserver();

// Subject
const shoppingCart = new ShoppingCart(1, "Eduardo");

shoppingCart.attach(smsObserver);
shoppingCart.attach(emailObserver);

shoppingCart.add(new CartItem(1, "Electric Guitar Shur", 1, 2800));
shoppingCart.add(new CartItem(2, "Amp 60w Fender Twin Reverb", 1, 1400));
shoppingCart.add(new CartItem(3, "Addario 009 Guitar Strings", 10, 7.5));

shoppingCart.purchase();
