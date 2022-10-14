describe('PrakTast/Homework - 03/10/22', () => {
    it('POST 1/pet  Add a new pet to the store', () => {
            const bodyRequest = {
                id: 11,
                category: {
                  id: 0,
                  name: "cat"
                },
                name: "Daria",
                photoUrls: [
                  "https://www.instagram.com/kot_jenya/"
                ],
                tags: [
                  {
                    id: 111,
                    name: "pet"
                  }
                ],
                status: "available"
              }
            const baseURL = 'https://petstore.swagger.io/v2'
            cy.request('POST',`${baseURL}/pet`,bodyRequest)
            .its('status').should('eq',200)
        });
        


        it('2/GET /pet/findByStatus Finds Pets by status', () => {
            const status = 'find';
            cy.request({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`, 
              }).then((response) => {
                const { name } = response.body[0].category;
                cy.log(JSON.stringify(response.body[0].category)); 
                expect(response.status).to.eq(200);
                expect(name).equal('cat');
              });
          });


          it('3/POST /pet/{petId} Updates a pet in the store with form data', () => {
            cy.request({
                method: 'POST', 
                url: 'https://petstore.swagger.io/v2/pet', 
                body: {
                "id": 11,
                "category": {
                  "id": 0,
                  "name": "cats"
             },
                name: "Daria",
                photoUrls: [
                  "https://www.instagram.com/p/CRCyXa8MIUl/"
                ],
                tags: [
                  {
                    id: 0,
                    name: "#marfavasilievna"
                  }
                ],
                "status": "post"
              } })
      
      
              const petId = '11';
              cy.request({
                  method: 'POST',
                  url: `https://petstore.swagger.io/v2/pet/${petId}`, 
                  form: true,
                  body: {
                      name: 'Dasha',
                      status: 'pending'
                  }
                }).then((response) => {
                  const { name } = response.body; 
                  cy.log(JSON.stringify(response.body));
                  expect(response.status).to.eq(200);
                });
      
              cy.request('get', 'https://petstore.swagger.io/v2/pet/23').then((response) => {
                  const {name, photoUrls, category} = response.body; 
                  expect(name).equal("Dasha");
                  cy.log(photoUrls[0]);
                  cy.log(category);
                  expect(photoUrls[0]).to.equal('https://www.instagram.com/kot_jenya/');
              })
            }) 
          });


          ///<reference types= "Cypress"/>

 
describe('PrakTast/Homework - 06/10/22', () => {
    it('create user', () => {
    cy.request({
         method: 'POST',
         url: 'https://restful-booker.herokuapp.com/booking',
         body: {
            firstname : "Daria",
            lastname : "Leonova",
            totalprice : 4,
            depositpaid : true,
            bookingdates : {
                checkin : "2023-01-01",
                checkout : "2023-01-01"
            },
            additionalneeds : "Breakfast"
        }
    }).then((response) => {
      expect(response).to.have.property('status', 200);
      expect(response.body).to.have.any.keys('bookingid');
      const bookingid = response.body.bookingid;
      cy.log(bookingid);
      cy.request({
      method: 'POST',
         url: 'https://restful-booker.herokuapp.com/auth',
         body: {
          username : "admin",
          password : "passwordtest111"
      }
    }).then((responseAuth) =>{
      const token = responseAuth.body.token;
      cy.request({
      method: 'PUT',
         url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
         body: {
          firstname : "Daria",
          lastname : "Leonova",
          totalprice : 4,
          depositpaid : true,
          bookingdates : {
            checkin : "2023-01-01",
            checkout : "2023-01-01"
          },
          additionalneeds : "Breakfast"
      },
         headers: {
          Cookie: `token=${token}`
         }
        });
    });
    });
    });
    });
          