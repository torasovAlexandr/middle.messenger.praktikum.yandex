import Block from '../../utils/Block';
import {template} from './template';
import {Routes} from '../../index';
import {Link} from '../link';
import Router from '../../utils/Router';

export class NavMenu extends Block {
  constructor(props: any) {
    super('div', props);
  }
  init() {
    const links: any = {};
    Object.keys(Routes).map((el) => {
      links[el] = new Link({
        text: el,

        events: {
          click: (e) => {
            e.stopPropagation();
            // @ts-ignore
            console.log(Routes[el]);
            // @ts-ignore
            Router.go(Routes[el]);
          },
        },
      });
    });
    this.children = {...links};
  }

  render() {
    return this.compile(template(Routes), this.props);
  }
}
