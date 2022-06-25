const host = "localhost:3000";

const testTextBox = (withLabel: string, cy: any) => {
  const randString = Math.random().toString(36).slice(2, 7);
  cy.get(`input[name=${withLabel}]`).type(randString);
  cy.get(`input[name=${withLabel}]`).should("have.value", randString);
};

describe("generator", () => {
  it("renders a page", () => {
    cy.visit(host);
  }),
    it("renders functional text boxes", () => {
      cy.visit(host);
      testTextBox("crusheeName", cy);
      testTextBox("crusheeGender", cy);
      testTextBox("crusheeLikes", cy);
      testTextBox("crusheeHairColor", cy);
      testTextBox("crusheeEyeColor", cy);
      testTextBox("crusherName", cy);
      testTextBox("crusherGender", cy);
      testTextBox("crusherLikes", cy);
    });
});
