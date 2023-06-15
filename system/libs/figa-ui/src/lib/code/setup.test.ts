import { setup } from './setup';

describe('Code works when: ', () => {
  const children = "const a = 'hello';";

  it('creates instance', () => {
    const view = setup({
      children,
      parent: document.createElement('div'),
    });

    expect(view.state.doc.toString()).toBe(children);
    expect(view.state.readOnly).toBe(false);
  });

  it('disables auto select in readonly mode', () => {
    const view = setup({
      children,
      parent: document.createElement('div'),
      readonly: true,
    });

    expect(view.state.doc.toString()).toBe(children);
    expect(view.state.readOnly).toBe(true);
  });
});
