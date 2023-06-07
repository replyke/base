import type { Meta, StoryObj } from "@storybook/react";
import AuthenticationModal from "./AuthenticationModal";

const meta: Meta<typeof AuthenticationModal> = {
  component: AuthenticationModal,
  title: "Authentication Modal",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
