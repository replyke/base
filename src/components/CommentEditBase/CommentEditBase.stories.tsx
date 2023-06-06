import type { Meta, StoryObj } from "@storybook/react";
import CommentEditBase from "./CommentEditBase";

const meta: Meta<typeof CommentEditBase> = {
  component: CommentEditBase,
  title: "Base Components/Comment Edit",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
};
