import { lazy } from "react";

const EHP = lazy(() => import("./EHP"));
const CHC = lazy(() => import("./CHC"));

export const Middleware = {
  ehp: () => <EHP></EHP>,
  chc: () => <CHC></CHC>,
};
