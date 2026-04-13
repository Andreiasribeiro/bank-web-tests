describe("transfer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithValidCredentials();
  });

  it("should allow transfer with valid details", () => {
    //Act
    cy.toMakeTransfer("Arthur Vieira", "Patricia Maforte", "11");
    //Assert
    cy.checkMessageInToast("Transfer completed!");
  });
  it("should show error when trying transfer more than $5000 without a token", () => {
    //Act
    cy.toMakeTransfer("Arthur Vieira", "Patricia Maforte", "6000");
    //Assert
    cy.checkMessageInToast(
      "Autenticação necessária para transferências acima de R$5.000,00.",
    );
  });
});
