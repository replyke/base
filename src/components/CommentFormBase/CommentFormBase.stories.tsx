import type { Meta, StoryObj } from "@storybook/react";
import CommentFormBase from "./CommentFormBase";

const meta: Meta<typeof CommentFormBase> = {
  component: CommentFormBase,
  title: "Comment Form",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const LoggedIn: Story = {
  args: {
    user: {
      _id: "2",
      name: "Jeffrey Stinson",
      img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/09/12/17/potter.jpg"
    },
    itemIdentifier:"home page"
  },
};
