import {set} from './helpers';
import {EventBus} from './EventBus';
import Block from './Block';

export enum StoreEvents {
  Updated = 'updated',
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    try {
      this.emit(StoreEvents.Updated, this.getState());
    } catch (er) {}
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();
// @ts-ignore
window.store = store;

export function withStore(mapStateToProps: (state: any) => any) {
  return function wrap(Component: typeof Block) {
    let previousState: any;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({...props, ...previousState});

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({...stateProps});
        });
      }
    };
  };
}

export default store;
