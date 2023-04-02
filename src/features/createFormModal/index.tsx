import React from "react";
import { Modal } from "@mui/material";
import { ModalContainer } from "../../app/styles/common";
import { ICreateFormModalProps } from "./types";
import { CreateBundleForm } from "../createBundleForm";
import { GetRelationsQuery, IsLoading } from "../../shared";
import { useLazyQuery } from "@apollo/client";
import { getRelations } from "../../shared/gql/relations";
import { getPositions } from "../../shared/gql/positions";

export const CreateFormModal: React.FC<ICreateFormModalProps> = ({
  toggleOpenModal,
  isOpenModal,
}) => {
  const [
    loadRelations,
    { loading: isLoadingRelations, error: errorRelations, data: relations },
  ] = useLazyQuery<GetRelationsQuery>(getRelations);
  const [
    loadPositions,
    { loading: isLoadingPositions, error: errorPositions, data: positions },
  ] = useLazyQuery(getPositions);

  React.useEffect(() => {
    loadRelations();
    loadPositions();
  }, []);

  const renderModal = () => {
    const isLoading: boolean =
      isLoadingRelations ||
      isLoadingPositions ||
      !!errorRelations ||
      !!errorPositions;

    if (isLoading) return <IsLoading isLoading={isLoading} />;
    if (
      relations?.applicantIndividualCompanyRelations?.data.length &&
      positions?.applicantIndividualCompanyPositions?.data.length
    ) {
      return (
        <CreateBundleForm
          relations={relations.applicantIndividualCompanyRelations.data}
          positions={positions.applicantIndividualCompanyPositions.data}
        />
      );
    }
    return null;
  };

  return (
    <Modal open={isOpenModal} onClose={toggleOpenModal}>
      <ModalContainer>{renderModal()}</ModalContainer>
    </Modal>
  );
};
