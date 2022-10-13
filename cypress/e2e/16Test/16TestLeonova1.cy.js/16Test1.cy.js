
describe('API', () => {
    it('PetStore',() => {
        const bodyRequest = {
            id: 15,
            category: {
              id: 3,
              name: "parrot"
            },
            name: "Bob",
            photoUrls: [
              "https://"
            ],
            tags: [
              {
                id: 666,
                name: "pet"
              }
            ],
            status: "available"
          }
        const baseURL = 'https://petstore.swagger.io/v2'
        cy.request('POST',`${baseURL}/pet`,bodyRequest)
        .its('status').should('eq',200)
            
    })
})



describe('API2', () => {
    it.only('testGet',() => {
        const status = {status: 'available'}
        cy.request('Get','https://petstore.swagger.io/v2/pet/findByStatus?status=available')
            
    })
})
