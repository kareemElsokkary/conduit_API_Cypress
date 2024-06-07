describe('First API', () => {
  beforeEach('login to Application',()=>{
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags',{fixture :'tags.json'})
    cy.intercept('Get','https://conduit-api.bondaracademy.com/api/articles*',{fixture :'articles.json'})
    cy.fixture('articles.json').then((file) => {
      const title=file.articles[1].slug
      file.articles[1].favoritesCount= file.articles[1].favoritesCount +1
      cy.intercept('Post','https://conduit-api.bondaracademy.com/api/articles/'+title+'/favorite',file)
    })
    cy.LogintoApplication()
  })
  it('Mock Tags', () => {
    cy.get('div.tag-list').then(tags=>{
      cy.wrap(tags).find('a')
          .should('contain', 'Kareem')
          .and('contain', 'Cypress')
          .and('contain', 'TestAutomation')
    })

  } )

  it('Mock Number of likes', () => {

    cy.get('app-article-list app-article-preview').eq('1').as('numberoflikes').find('button').click()
        cy.get('@numberoflikes').should('contain', '210')

  } )



})