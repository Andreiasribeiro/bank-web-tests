describe("transfer", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("credentials").then((credentials) => {
      cy.get("#username").click().type(credentials.valid.username);
      cy.get("#senha").click().type(credentials.valid.password);
    });
    cy.get("#login-section > .btn").click();
  });

  it("should allow transfer with valid details", () => {
    (cy.get('label[for="conta-origem"]').parent().as("campo-conta-origem"),
      cy.get("@campo-conta-origem").click());
    cy.get("@campo-conta-origem").contains("Arthur Vieira").click();

    (cy.get('label[for="conta-destino"]').parent().as("campo-conta-destino"),
      cy.get("@campo-conta-destino").click());
    cy.get("@campo-conta-destino").contains("Patricia Maforte").click();
    cy.get("#valor").click().type("11");
    cy.contains("button", "Transfer").click();
    cy.get(".toast").should("have.text", "Transfer completed!");
  });
});
