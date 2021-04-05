import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { LiberV4 } from "liber-components";
import hydrateStore from "../store";
import ConfirmationHistory from "./components/ConfirmationHistory.jsx";

const View = ({ token, sacadoId }) => (
  <>
    <Provider store={hydrateStore({})}>
      <ConfirmationHistory token={token} sacadoId={sacadoId} />
    </Provider>
  </>
);

export default View;
