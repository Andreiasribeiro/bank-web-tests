beforeEach(() => {
  //Arrange
  cy.visit("http://localhost:4000");
  cy.screenshot("after-visiting-page");
});

describe("login", () => {
  it("Login with valid credentials should allow access to the system", () => {
    //Act
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.valid.username);
      cy.get("#senha").click().type(credentials.valid.password);
    });

    cy.screenshot("after-entered-valid-data");
    cy.get("#login-section > .btn").click();
    cy.screenshot("after-clicking-login-button");
    //Assert
    cy.contains("h4", "Make a Transfer").should("be.visible");
  });
  it("Login with invalid credentials should show error message", () => {
    //Act
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.invalid.username);
      cy.get("#senha").click().type(credentials.invalid.password);
    });
    cy.contains("button", "Sign In").click();
    //Assert
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
