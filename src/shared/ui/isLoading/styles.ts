import styled from "@emotion/styled";
import { IIsLoadingContainer } from "./types";

export const LoadingContainer = styled.div<IIsLoadingContainer>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000000cf;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ isLoading }) => (isLoading ? "initial" : "none")};
  opacity: ${({ isLoading }) => (isLoading ? "1" : "0")};
`;
