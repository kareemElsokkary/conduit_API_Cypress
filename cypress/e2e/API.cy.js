describe(' API', () => {
  /*beforeEach('GetToken',()=>{


  })*/

  it('login to Application',()=>{
    const baseURl = 'https://conduit-api.bondaracademy.com'
    const creditnal = {
      user: {
        email: "kareem.xxxx@gmail.com",
        password: "123456"}}
    cy.request('post', baseURl+'/api/users/login',creditnal).its('body').then((data)=>{
      const token =data.user.token
      cy.log("Token " + token)
      expect(data.user.email).to.equal("kareem.xxxx@gmail.com")
      expect(data.user.username).to.equal("Kareem")

    })
  })

})