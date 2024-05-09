import { GetFormState } from "@/actions/form";

export interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormState>>;
  loading: boolean;
}
