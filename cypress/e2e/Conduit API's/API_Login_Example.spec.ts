import RegisterUser from '../../support/Helper/ConduitAPI/signupHelper'
const RegisterUserOBJ :RegisterUser= new RegisterUser();

describe('Conduit: Signup Account',()=>{

    it('Cxxx1: Login - Create New Account Method 1',()=>{
        cy.api({
            method:'POST',
            url:'https://conduit.productionready.io/api/users',
            body:{
                user:{
                  username: `Anwar${Math.round(10000*(Math.random()))}`,
                  email: `Anwar${Math.round(10000*(Math.random()))}@gmail.com`,
                  password: "password123!"
                }
              }
        })
        .then((Response) => {
            expect(Response).property('status').to.equal(201);
        })
        
    })
    it('Cxxx2: Login - Create New Account Mehod 2',()=>{
        RegisterUserOBJ.counduitNewUserUsingAPI(`Anwar${Math.round(10000*(Math.random()))}`,`Anwar${Math.round(10000*(Math.random()))}@gmail.com`,"password123!" )
    
    })
    it('Cxxx3: Login - Create New Account Mehod 3',()=>{
        const apiPayload={
            user:{
                username: `Anwar${Math.round(10000*(Math.random()))}`,
                email: `Anwar${Math.round(10000*(Math.random()))}@gmail.com`,
                password: "password123!"
              }

        }
        RegisterUserOBJ.counduitNewUserUsingAPI2(apiPayload)
    
    })

})
