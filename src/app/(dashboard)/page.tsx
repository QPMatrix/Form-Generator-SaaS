import dynamic from "next/dynamic";
import StatsCards from "@/components/state/stats-cards";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/form-builder/create-btn";

const CardStateWrapper = dynamic(
  () => import("@/components/state/card-state-wrraper"),
  {
    loading: () => <StatsCards loading={true} />,
  }
);

export default function Home() {
  return (
    <div className="container  pt-4">
      <CardStateWrapper />
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">You'r forms</h2>
      <Separator className="my-6" />
      <CreateFormBtn />
    </div>
  );
}
