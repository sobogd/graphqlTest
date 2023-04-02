import { gql } from "@apollo/client";

export const getRelations = gql(`
  query GetRelations {
    applicantIndividualCompanyRelations {
      data { 
        id
        name
      }
    }
  }
`);
