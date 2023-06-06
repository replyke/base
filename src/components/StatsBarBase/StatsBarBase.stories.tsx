import type { Meta, StoryObj } from "@storybook/react";
import StatsBarBase from "./StatsBarBase";

const meta: Meta<typeof StatsBarBase> = {
  component: StatsBarBase,
  title: "Base Components/Stats Bar",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
