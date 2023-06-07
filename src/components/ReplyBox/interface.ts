import { User } from "../interfaces";

export interface ReplyBoxProps {
  user?: User;
  parentComment: {
    _id: string;
    author: {
      name: string;
    };
  };
  onClickCancel: () => void;
  replyButtonColor?: string;
  replyButtonBorderRadius?: number;
  replyButtonFontSize?: number;
  replyButtonFontWeight?: number;
  replyButtonFontColor?: string;
  replyButtonPaddingX?: number;
  replyButtonPaddingY?: number;
  replyButtonShadow?: boolean;
}
