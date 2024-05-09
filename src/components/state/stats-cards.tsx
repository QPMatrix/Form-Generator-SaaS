import { StatsCardProps } from "@/classes/state-card";
import React from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import StatsCard from "./stats-card";
const StatsCards = (props: StatsCardProps) => {
  const { data, loading } = props;
  if (!data) {
    return null;
  }
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600" />}
        helperText="All time form  visits"
        value={data.visits.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-yellow-600" />}
        helperText="All time form  submissions"
        value={data.submissions.toLocaleString()}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title="Submissions rate"
        icon={<HiCursorClick className="text-green-600" />}
        helperText="Visits that resulted in form submissions"
        value={data.submissionsRate.toLocaleString() + "%"}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-red-600" />}
        helperText="Visits that leaves without interacting "
        value={data.visits.toLocaleString() + "%"}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
};

export default StatsCards;
