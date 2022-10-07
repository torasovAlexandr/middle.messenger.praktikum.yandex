// @ts-ignore
import * as proxyquire from 'proxyquire';
import {expect} from 'chai';

import type BlockType from './Block';

import * as sinon from 'sinon';

const eventBusMock = {
  on: sinon?.fake(),
  emit: sinon?.fake(),
};

const {default: Block} = proxyquire('./Block', {
  './EventBus': {
    EventBus: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
}) as {default: typeof BlockType};

describe('Block', () => {
  class ComponentMock extends Block {}

  it('should fire init event on initialization', () => {
    // @ts-ignore
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });
});
