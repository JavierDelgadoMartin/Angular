import { ToDoListsPage } from './app.po';

describe('to-do-lists App', function() {
  let page: ToDoListsPage;

  beforeEach(() => {
    page = new ToDoListsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
