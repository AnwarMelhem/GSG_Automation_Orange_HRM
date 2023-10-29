
import Posts from "../../support/PageObjectes/Posts";
import Read_XLSX_File  from "../../support/PageObjectes/Read_Xslx_File.spec";
import LoginPage from "../PageObjectes/LoginPage";

const loginObj: LoginPage = new LoginPage();
const PostObj: Posts  =new Posts ();


describe("Buzz: Write post", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    // Login by Admin in OrangeHRM system
    loginObj.login("Admin", "admin123");
    cy.writeFile('cypress/fixtures/posts.txt', 'Hello, Anwar')
  });

  it("Buzz: Write post", () => {
    PostObj.selectBuzz();
    cy.fixture('posts.txt').as('post')
    cy.get('@post').then((post) => {
        PostObj.writePost(post)
        PostObj.clickPost()
        PostObj.assertion(post)
    });
   
    
  });
});