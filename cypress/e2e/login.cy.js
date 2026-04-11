describe("login", () => {
  it("Login with valid credentials should allow access to the system", () => {
    //Arrange
    cy.visit("http://localhost:4000");
    //Act
    cy.get("#username").click().type("andreia.ribeiro");
    cy.get("#senha").click().type("1234567");
    cy.get("#login-section > .btn").click();
    //Assert
    cy.contains("h4", "Make a Transfer").should("be.visible");
  });
});
