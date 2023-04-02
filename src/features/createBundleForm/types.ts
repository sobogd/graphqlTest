import {
  ApplicantIndividualCompanyPosition,
  ApplicantIndividualCompanyRelation,
} from "../../shared";

export type CreateBundleFormProps = {
  positions: ApplicantIndividualCompanyPosition[];
  relations: ApplicantIndividualCompanyRelation[];
};

export type ICreateBundleForm = {
  relations: ApplicantIndividualCompanyPosition[] | null;
  position: ApplicantIndividualCompanyPosition[] | null;
  title: string;
  description: string;
};
