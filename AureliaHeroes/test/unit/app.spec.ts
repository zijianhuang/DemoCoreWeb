import { App } from '../../src/app';

describe('App', () => {
  it('defines the root message and routes', () => {
    const app = new App();

    expect(app.message).toBe('Aurelia Heroes!');
    expect(App.routes).toHaveLength(3);
    expect(App.routes[0].path).toContain('');
  });
});
