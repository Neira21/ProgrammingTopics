interface Observable {
  attach(o: Observer);
  detach(o: Observer);
  notify();
}

interface Observer {
  update();
}

// Subject
class YotubeChannel implements Observable {
  private channelSubscribers = [];
  private lastVideoPosted: string = "";

  attach(o: Observer) {
    this.channelSubscribers.push(o);
  }

  detach(o: Observer) {
    const index = this.channelSubscribers.indexOf(o);
    if (index !== -1) {
      this.channelSubscribers.splice(index, 1);
    }
  }

  notify(): void {
    for (let subscriber of this.channelSubscribers) {
      subscriber.update();
    }
  }

  addNewVideo(title: string) {
    this.lastVideoPosted = title;
    this.notify();
    console.log(`New youtube video added to channel: ${title}`);
  }

  lastVideoTitle() {
    return this.lastVideoPosted;
  }
}

class Suscriber implements Observer {
  private observable = null;

  constructor(observable: YotubeChannel) {
    this.observable = observable;
  }

  update() {
    console.log("New video posted: ");
    console.log(this.observable.lastVideoTitle());
  }
}

let channel = new YotubeChannel();

let s1 = new Suscriber(channel);
let s2 = new Suscriber(channel);
let s3 = new Suscriber(channel);

channel.attach(s1);
channel.attach(s2);
channel.attach(s3);

channel.addNewVideo("Design Patterns in TypeScript - Observer");
