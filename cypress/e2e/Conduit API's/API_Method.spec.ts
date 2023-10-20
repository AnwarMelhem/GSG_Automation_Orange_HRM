import ApiHelpers from '../../support/Helper/ConduitAPI/API_Helper'
const ObjApiHelpers: ApiHelpers = new ApiHelpers();
let Token:any='';
describe('API Tests', () => {
    

    it('should perform a POST request->Authentaction Request', () => {
        const data = {
            
                user:{
                  email: "anwar1@gmail.com",
                  password: "anwar1@gmail.com"
                }
              
        };

        ObjApiHelpers.post('/api/users/login', data).then((response) => {
           ObjApiHelpers.assertStatusCode(response, 200);
           Token=response.body.user.token;
        
            //Add more assertions as needed
        });
    });

    it('should perform a GET request-> Get Current Uesr Request', () => {
        ObjApiHelpers.get('/api/user',`JWT ${Token}`).then((response) => {
            ObjApiHelpers.assertStatusCode(response, 200);
            // Add more assertions as needed
        });
    });

    it.skip('should perform a PUT request', () => {
        const data = {
            // Your request data here
        };

        ObjApiHelpers.put('/api/some-endpoint', data).then((response) => {
            ObjApiHelpers.assertStatusCode(response, 200);
            // Add more assertions as needed
        });
    });

    it.skip('should perform a DELETE request', () => {
        ObjApiHelpers.delete('/api/some-endpoint').then((response) => {
            ObjApiHelpers.assertStatusCode(response, 204);
            // Add more assertions as needed
        });
    });
});