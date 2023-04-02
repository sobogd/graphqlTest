import { gql } from "@apollo/client";

export const getPositions = gql(`
  query GetPositions {
    applicantIndividualCompanyPositions {
      data { 
        id
        name
      }
    }
  }
`);
