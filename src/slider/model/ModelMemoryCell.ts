import { Observable } from '../observable/Observable';

interface CheckFunction<T> {
  (data: unknown): T
}

class ModelMemoryCell<T> {
  private value: T;

  private subscribers: Observable<T>;

  private checkFunction: CheckFunction<T>;

  constructor(initialValue: T, checkFunction: CheckFunction<T> = (givenValue: unknown) => givenValue as T) {
    this.subscribers = new Observable();
    this.checkFunction = checkFunction;
    this.value = initialValue;
  }

  public get() {
    return this.value;
  }

  public set(value: unknown) {
    try {
      this.value = this.checkFunction(value);
      this.subscribers.publish(this.value);
    } catch (error) {
      console.warn(error);
    }
  }

  public addSubscriber(subscriber: (value: T) => void) {
    this.subscribers.add(subscriber);
  }

  public removeSubscriber(subscriber: (value: T) => void) {
    this.subscribers.remove(subscriber);
  }

  public update() {
    this.set(this.value);
  }
}

export { ModelMemoryCell };
