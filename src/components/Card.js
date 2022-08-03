import React from "react";
import { Data } from "../components/Data";
import CardContainer from "./CardContainer";

export default function Card() {
  return Data.map((value) => {
    return (
      <>
        <CardContainer value={value} />
      </>
    );
  });
}
