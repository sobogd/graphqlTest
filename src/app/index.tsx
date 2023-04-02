import React from "react";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo/client";
import { theme } from "./styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { GeneralContainer } from "./styles/common";
import { CreateFormModal } from "../features/createFormModal";

export const App: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const toggleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GeneralContainer maxWidth="sm">
          <Typography variant="h1" component="h1" marginBottom={2}>
            Связки позиций и компаний
          </Typography>
          <Button variant="contained" onClick={toggleOpenModal}>
            Создать новую
          </Button>
          <CreateFormModal
            isOpenModal={isOpenModal}
            toggleOpenModal={toggleOpenModal}
          />
        </GeneralContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};
