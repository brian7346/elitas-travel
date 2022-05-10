import React from "react";
import { Header } from "../../components/header";
import { Planes } from "../../components/planes";

export const HomePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <Planes />
    </React.Fragment>
  );
};
