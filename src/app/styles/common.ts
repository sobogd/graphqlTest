import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";

export const GeneralContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(Box)`
  background: ${grey[900]};
  padding: 30px;
`;
