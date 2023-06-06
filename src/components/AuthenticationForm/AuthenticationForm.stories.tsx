import type { Meta, StoryObj } from "@storybook/react";
import AuthenticationForm from "./AuthenticationForm";

const meta: Meta<typeof AuthenticationForm> = {
  component: AuthenticationForm,
  title: "Base Components/Authentication Form",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
