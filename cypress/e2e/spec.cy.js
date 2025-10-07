describe('Live coding', () => {
  beforeEach(() => {
    cy.viewport('macbook-16')
    cy.visit('/')
    })
  it('Open an image', () => {
    cy.contains('CTA Head and Neck', { timeout: 20000 }).should('be.visible').click( {force: true} )

    cy.contains('button', 'Basic Viewer').click()

    cy.get('#scroll-label', { timeout: 20000 }).should('be.visible').then(() => {
      cy.contains('button', 'Skip all').click()
    })
  })

  it('Search for patient name and opening the third image using double-click', () => {
    cy.get('[data-cy="input-patientName"]', { timeout: 20000 }).should('be.enabled').type('DATSCAN1')

    cy.contains('DATSCAN1', { timeout: 20000 }).should('be.visible').click( {force: true} )

    cy.contains('button', 'Basic Viewer').click()

    cy.get('#scroll-label', { timeout: 20000 }).should('be.visible').then(() => {
      cy.contains('button', 'Skip all').click()
    })

    cy.get('[id="ohif-thumbnail-list"]', { timeout: 20000 }).within(() => {
      cy.get('[data-cy="study-browser-thumbnail"]').eq(2).dblclick()
    })
  })

  it('Search for patient name and opening the third image using drag and drop', () => {
    cy.get('[data-cy="input-patientName"]', { timeout: 20000 }).should('be.enabled').type('DATSCAN1')

    cy.contains('DATSCAN1', { timeout: 20000 }).should('be.visible').click( {force: true} )

    cy.contains('button', 'Basic Viewer').click()

    cy.get('#scroll-label', { timeout: 20000 }).should('be.visible').then(() => {
      cy.contains('button', 'Skip all').click()
    })

    cy.get("#ohif-thumbnail-list").within(() => {
      cy.get('[data-cy="study-browser-thumbnail"]').eq(0).trigger('dragstart')
    })

    cy.get('[data-viewportid="default"]').trigger('drop')
  })
})