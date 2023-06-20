//your JS code here. If required.
$(document).ready(function() {
  // Check if there are saved details
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    $('#existing').show();
  }

  $('form').submit(function(event) {
    event.preventDefault();

    var username = $('#username').val();
    var password = $('#password').val();
    var rememberMe = $('#checkbox').is(':checked');

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
  });

  $('#existing').click(function() {
    var username = localStorage.getItem('username');
    alert('Logged in as ' + username);
  });
});


describe('Login Form', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy.visit(baseUrl + '/main.html');
  });

  it('should initialize form correctly', () => {
    cy.get('form');
    cy.get("label[for='username']").contains('Username:');
    cy.get('input#username').should('be.empty');
    cy.get("label[for='password']").contains('Password:');
    cy.get('input#password').should('be.empty');
    cy.get("label[for='checkbox']").contains('Remember me:');
    cy.get('input#checkbox');
    cy.get('input#submit[value="Submit"]');
    cy.get('button#existing').should('be.hidden');
    expect(localStorage.getItem('username')).to.be.null;
    expect(localStorage.getItem('password')).to.be.null;
  });

  it('should login with new user and remember details', () => {
    cy.get('input#username').should('be.empty').type('username1');
    cy.get('input#password').should('be.empty').type('password1');
    cy.get('input#checkbox').check();
    cy.get('input#submit[value="Submit"]').click().then(() => {
      expect(localStorage.getItem('username')).to.eq('username1');
      expect(localStorage.getItem('password')).to.eq('password1');
    });
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Logged in as username1');
    });
  });

  it('should login as existing user when button is clicked', () => {
    cy.get('input#username').should('be.empty').type('username1');
    cy.get('input#password').should('be.empty').type('password1');
    cy.get('input#checkbox').uncheck();
    cy.get('input#submit[value="Submit"]').click().then(() => {
      expect(localStorage.getItem('username')).to.be.null;
      expect(localStorage.getItem('password')).to.be.null;
      cy.get('button#existing').should('be.hidden');
    });
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Logged in as username1');
    });
    cy.get('button#existing').contains('Login as existing user').click().then(() => {
      cy.on('window:alert', (text) => {
        expect(text).to.eq('Logged in as username1');
      });
    });
  });
});
