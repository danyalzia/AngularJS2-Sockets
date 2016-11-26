import { AngularJS2SocketsPage } from './app.po';

describe('angular-js2-sockets App', function() {
  let page: AngularJS2SocketsPage;

  beforeEach(() => {
    page = new AngularJS2SocketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
