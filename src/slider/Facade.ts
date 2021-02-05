import { Model } from './model/Model';
import { ModelGUI } from './model/ModelGUI';
import { ModelMemoryCell } from './model/ModelMemoryCell';
import { Presenter } from './presenter/Presenter';
import { View } from './view/View';

class Facade {
  private model: Model;

  private modelGUI: ModelGUI;

  private view: View;

  private presenter: Presenter;

  constructor(container: HTMLElement, config?: Config) {
    this.model = new Model(config);
    this.modelGUI = new ModelGUI(this.model);
    this.view = new View(container);
    this.presenter = new Presenter(this.modelGUI, this.view);
  }

  public subscribe(option: ModelOption, subscriber: Function) {
    this.model[option].addSubscriber(subscriber);
  }

  public unsubscribe(option: ModelOption, subscriber: Function) {
    this.model[option].removeSubscriber(subscriber);
  }

  public set(option: ModelOption, value: State[typeof option]) {
    (this.model[option] as ModelMemoryCell<typeof value>).set(value);
  }

  public get(option: ModelOption): State[typeof option] {
    return this.model[option].get();
  }
}

export default Facade;