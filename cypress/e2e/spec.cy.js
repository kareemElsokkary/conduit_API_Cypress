describe('First API', () => {
  beforeEach('login to Application',()=>{
    cy.LogintoApplication()
  })
  it('Verify correct and response', () => {
    let title='This is title 8'
    let description='This is the Description'
    let article = 'This is an Article '
    cy.wait(1000)
    cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/').as('PostArticles')
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type(title)
    cy.get(':nth-child(2) > .form-control').type(description)
    cy.get(':nth-child(3) > .form-control').type(article)
    cy.get('.btn').click()

    cy.wait('@PostArticles')
    cy.get('@PostArticles').then(xhr =>{
      console.log(xhr)
      expect(xhr.response.statusCode).to.equals(201)
      expect(xhr.response.statusMessage).to.equals('Created')
      expect(xhr.response.body.article.body).to.equals(article)
      expect(xhr.response.body.article.description).to.equals(description)
      expect(xhr.response.body.article.title).to.equals(title)

    } )

  })
})