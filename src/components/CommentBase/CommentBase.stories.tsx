import type { Meta, StoryObj } from "@storybook/react";
import CommentBase from "./CommentBase";

const meta: Meta<typeof CommentBase> = {
  component: CommentBase,
  title: "Base Components/Comment",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    index: 0,
    comment: {
      item_identifier: "home-page",
      _id: "34",
      likes: [],
      replies_count: 0,
      author: {
        _id: "1",
        name: "Daniel Radcliff",
        img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/09/12/17/potter.jpg",
      },
      body: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      created_at: "2019-04-19T12:59-0500",
    },

    depth: 0,
  },
};
