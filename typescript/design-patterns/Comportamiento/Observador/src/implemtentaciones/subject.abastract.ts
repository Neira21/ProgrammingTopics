import type { Observer } from "./observer.interface.ts";

export abstract class Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    if (!this.observers.some((x) => x === observer)) {
      this.observers.push(observer);
    } else {
      throw new Error("El observador ya está registrado.");
    }
  }

  public detach(observer: Observer): void {
    this.observers.filter((x) => x !== observer);
  }

  protected notify(message: any): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}
