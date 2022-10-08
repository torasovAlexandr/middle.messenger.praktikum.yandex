import * as sinon from 'sinon';
import {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from 'sinon';
import HTTPTransport from './HTTPTransport';

import {expect} from 'chai';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests.length = 0;
  });

  it('.get() should send GET request', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('Get');
  });

  it('.post() should send Post request', () => {
    instance.post('/user');

    const [request] = requests;

    expect(request.method).to.eq('Post');
  });

  it('.put() should send Put request', () => {
    instance.put('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('Put');
  });

  it('.delete() should send Delete request', () => {
    instance.delete('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('Delete');
  });
});
