import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Middleware } from "../middlewares";

function SurveyPage() {
  const { service } = useParams();
  return (
    <Suspense fallback={<div>loading</div>}>{Middleware[service]()}</Suspense>
  );
}

export default SurveyPage;
