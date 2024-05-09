import { GetFormState } from "@/actions/form";
import React from "react";
import StatsCard from "./stats-cards";

const CardStateWrapper = async () => {
  const stats = await GetFormState();
  return <StatsCard loading={false} data={stats} />;
};

export default CardStateWrapper;
