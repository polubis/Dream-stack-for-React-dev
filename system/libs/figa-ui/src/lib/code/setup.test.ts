import { setup } from './setup';

describe('Code works when: ', () => {
  const children = "const a = 'hello';";

  it('creates instance', async () => {
    const view = await setup({
      children,
      parent: document.createElement('div'),
      lang: 'js',
      wrapLines: false,
      readonly: false,
    });

    expect(view.state.doc.toString()).toBe(children);
    expect(view.state.readOnly).toBe(false);
  });

  it('disables auto select in readonly mode', async () => {
    const view = await setup({
      children,
      parent: document.createElement('div'),
      readonly: true,
      lang: 'js',
      wrapLines: false,
    });

    expect(view.state.doc.toString()).toBe(children);
    expect(view.state.readOnly).toBe(true);
  });
});
