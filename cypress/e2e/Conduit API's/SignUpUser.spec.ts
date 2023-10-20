import RegisterUser from '../../support/Helper/ConduitAPI/signupHelper'
const RegisterUserOBJ: RegisterUser = new RegisterUser();
describe('SignUp Logic', () => {

    it('SignUp: User Should be able tocreate new user', () => {

        RegisterUserOBJ.addUserViaAPI().then((resolve) => {
            cy.log(`${resolve}`)
        });
    })
});