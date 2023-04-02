import React from "react";
import { CircularProgress } from "@mui/material";
import { IIsLoadingProps } from "./types";
import { LoadingContainer } from "./styles";

export const IsLoading: React.FC<IIsLoadingProps> = ({ isLoading }) => {
  return (
    <LoadingContainer isLoading={isLoading}>
      <CircularProgress />
    </LoadingContainer>
  );
};
