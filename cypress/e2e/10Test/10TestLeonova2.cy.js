//Напишите тест на страницу careers https://www.beaxy.com/careers/ , где будут проверены все заголовки h1/h2/h3 на странице//

describe('checking headings', () => {
    
      it('input', () => {
        cy.visit('https://www.beaxy.com/careers/');

        cy.get('div[class="title"]').invoke('text').should('eq',"Careers");
        cy.get('h1').invoke('text').should('eq'," Join a global team working on the future of finance");
        cy.get('h2[class="career-body__title"]').invoke('text').should('eq'," Why join Beaxy?");

        cy.get('div[class="body-content"] :first-child :first-child').invoke('text').should('eq'," Bridge gaps");
        cy.get('div[class="body-content"] :first-child :nth-child(2)').invoke('text').should('eq'," Help us build the connecting points from legacy finance to emerging fintech, forging a new path for the future.");

        cy.get('div[class="body-content"] :nth-child(2) :nth-child(1)').invoke('text').should('eq'," Connect globally");
        cy.get('div[class="body-content"] :nth-child(2) :nth-child(2)').invoke('text').should('eq'," Our team spans the globe and engages with an equally broad global audience. Come be a part of this global movement.");

        cy.get('div[class="body-content"] :nth-child(3) :nth-child(1)').invoke('text').should('eq'," Build powerfully");
        cy.get('div[class="body-content"] :nth-child(3) :nth-child(2)').invoke('text').should('eq'," Work with the most powerful trading technology. Help us push our capabilities even farther.");

        cy.get('div[class="body-content"] :nth-child(4) :nth-child(1)').invoke('text').should('eq'," Value driven");
        cy.get('div[class="body-content"] :nth-child(4) :nth-child(2)').invoke('text').should('eq'," We care about our community and our poeple. See what is means to be truly valued for your work.");

        cy.get('div[class="body-content"] :nth-child(5) :nth-child(1)').invoke('text').should('eq'," Opportunities for everyone");
        cy.get('div[class="body-content"] :nth-child(5) :nth-child(2)').invoke('text').should('eq'," Positions of all types are available, from customer support to development. For people of all walks of life.");

        cy.get('div[class="body-content"] :nth-child(6) :nth-child(1)').invoke('text').should('eq'," Empowering freedom");
        cy.get('div[class="body-content"] :nth-child(6) :nth-child(2)').invoke('text').should('eq'," Be a driving force behind a truly inclusive financial experience. Help us bring monetary freedom to the world.");

        cy.get('div[class="body-link"] a').invoke('text').should('eq',"Meet the Beaxy Team");





  
       
        });

    });

  
    