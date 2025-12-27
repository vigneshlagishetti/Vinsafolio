"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
// Import as value to use in typeof, but it will be erased from output since it's only used in type position
import { SkillsChart } from "./SkillsChart";

const SkillsChartDynamic = dynamic(
  () => import("./SkillsChart").then((mod) => mod.SkillsChart),
  {
    loading: () => (
      <div className="h-[500px] w-full animate-pulse bg-muted/50 rounded-xl" />
    ),
    ssr: false,
  },
);

export function SkillsChartWrapper(props: ComponentProps<typeof SkillsChart>) {
  return <SkillsChartDynamic {...props} />;
}
