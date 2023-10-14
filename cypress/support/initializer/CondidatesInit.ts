import { ICreateCandidatesPayload } from '../Helper/Payload/Add_candidates_payload'
import GenericHelper from '../Helper/GenericFunctun/GenericFunction'
export default class userCandidates {
    static initCandidates(): ICreateCandidatesPayload {
        let createCandidatesPayload: ICreateCandidatesPayload = {
            comment: "Anwar",
            consentToKeepData: false,
            contactNumber: "05963258",
            dateOfApplication: "2023-10-25",
            email: "anwar@gmail.com",
            firstName: "anwar1",
            keywords: "anwar1",
            lastName: "anwar1",
            middleName: "anwar1",
            vacancyId:8
        }
        return createCandidatesPayload;
    }
} 