import { lazy } from "react";

const EHP = lazy(() => import("./ehp"));
const CHC = lazy(() => import("./chc"));

export const Middleware = {
  ehp: () => <EHP></EHP>,
  chc: () => <CHC></CHC>,
};
