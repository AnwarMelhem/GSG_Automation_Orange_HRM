import { ICreateCandidatesPayload } from "../Payload/Add_candidates_payload";
import { ICreateCandidatesResponse } from "../Response/Add_candidates_Response"
import userCandidates from "../../initializer/CondidatesInit";
import { reject, resolve } from "cypress/types/bluebird"


const baseUrl = Cypress.config().baseUrl;
export const URLs = {
    users: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`
}

class Recruitment_ASS2_API {
    addUserViaAPI() {

        return new Cypress.Promise<ICreateCandidatesResponse>((resolve:any, reject:any) => {
            cy.addNewCandiate(URLs.users, userCandidates.initCandidates()).then((response) => {
                let CandidateID = response.data.id;
                console.log("from addNewCandiate")
                console.log(CandidateID);
                resolve(CandidateID);
            })
        })

    }

    shortlistCandidateViaAPI(CandidateID:any){
        cy.api({
            method:'PUT',
            url:`${baseUrl}/web/index.php/api/v2/recruitment/candidates/${CandidateID}/shortlist`,
            body:{note:null}
        }).then((response)=>{
            console.log(response)
        })
    }

  
   
}

export default Recruitment_ASS2_API;