beforeEach(() => {
  //Arrange
  cy.visit("/");
  cy.screenshot("after-visiting-page");
});

describe("login", () => {
  it("Login with valid credentials should allow access to the system", () => {
    //Act
    cy.loginWithValidCredentials();
    // cy.screenshot("after-clicking-login-button");
    //Assert
    cy.contains("h4", "Make a Transfer").should("be.visible");
  });
  it("Login with invalid credentials should show error message", () => {
    //Act
    cy.loginWithInvalidCredentials();
    //Assert
    //cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
    cy.checkMessageInToast("Erro no login. Tente novamente.");
  });
});
