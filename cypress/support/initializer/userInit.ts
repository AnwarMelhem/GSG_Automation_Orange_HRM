import { ICreateEmployeePayload } from '../Helper/Payload/userAPIPayload'
import GenericHelper from '../Helper/GenericFunctun/GenericFunction'
export default class userInit {
    static initUser(): ICreateEmployeePayload {
        let createUserPayload: ICreateEmployeePayload = {
            user: {
                username: `Anwar${GenericHelper.genericRandomString()}`,
                email: `Anwar${GenericHelper.genericRandomString()}@gmail.com`,
                password: "password123!"
            }
        }
        return createUserPayload;
    }
}