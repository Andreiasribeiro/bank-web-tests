beforeEach(() => {
  //Arrange
  cy.visit("http://localhost:4000");
  cy.screenshot("after-visiting-page");
});

describe("login", () => {
  it("Login with valid credentials should allow access to the system", () => {
    //Act
    cy.get("#username").click().type("andreia.ribeiro");
    cy.get("#senha").click().type("1234567");
    cy.screenshot("after-entered-valid-data");
    cy.get("#login-section > .btn").click();
    cy.screenshot("after-clicking-login-button");
    //Assert
    cy.contains("h4", "Make a Transfer").should("be.visible");
  });
  it("Login with invalid credentials should show error message", () => {
    //Act
    cy.get("#username").click().type("andreia.ribeiro");
    cy.get("#senha").click().type("7654321"); //incorrect password
    cy.contains("button", "Sign In").click();
    //Assert
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
