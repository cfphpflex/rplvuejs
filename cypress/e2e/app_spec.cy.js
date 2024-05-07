describe('Vue app basic tests', () => {
  beforeEach(() => {
// Point to where your Vue app is hosted
    cy.visit('http://localhost:5173/');
  });

  it('Displays the logo', () => {
    cy.get('.logo').should('be.visible');
  });

  it('HelloWorld component displays the correct message', () => {
    cy.get('.wrapper').contains('You did it!');
  });

  it('TheWelcome component is rendered', () => {
    cy.get('main').find('TheWelcome').should('exist');
  });
});

// describe('app_spec.cy.js', () => {
//   it('playground', () => {
//     // cy.mount()
//   })
// })