import React from "react";
import { StatusBar } from "expo-status-bar";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
