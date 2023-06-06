import type { Meta, StoryObj } from "@storybook/react";
import CommentMenuBase from "./CommentMenuBase";

const meta: Meta<typeof CommentMenuBase> = {
  component: CommentMenuBase,
  title: "Base Components/Comment Menu",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {

  },
};
