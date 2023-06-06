import { Comment, User, TailwindColors, BorderStyles } from "../../../types/typings";

// export type TailwindColors =
//   | "slate"
//   | "gray"
//   | "zinc"
//   | "neutral"
//   | "stone"
//   | "red"
//   | "orange"
//   | "amber"
//   | "yellow"
//   | "lime"
//   | "green"
//   | "emerald"
//   | "teal"
//   | "cyan"
//   | "sky"
//   | "blue"
//   | "indigo"
//   | "violet"
//   | "purple"
//   | "fuchsia"
//   | "pink"
//   | "rose";

// export type BorderStyles =
//   | "solid"
//   | "dashed"
//   | "dotted"
//   | "double"
//   | "groove"
//   | "ridge"
//   | "inset"
//   | "outset"
//   | "none"
//   | "hidden";

export interface CommentBaseProps {
  user?:User;
  
  index: number;
  comment: Comment;
  ReplyComponent: React.ElementType;

  depth: number;
  currentUserId?: string;
  width?: number;
  dir?: "rtl" | "ltr";

  replyIndent?: number;
  threadsSeperatorWidth?: number;
  threadsSeperatorColor?: string;
  threadsSeperatorStyle?: BorderStyles;
  marginBottom?: number;
  paddingX?: number;
  paddingY?: number;

  authorNameColor?: string;
  authorAvatarSize?: number;
  authorAvatarBorderRadius?: number;

  dateFontSize?: number;
  dateFontColor?: string;

  menuButtonPadding?: number;
  menuButtonBackgroundColor?: string;
  menuButtonBorderRadius?: number;
  menuButtonIconColor?: string;
  menuContainerWidth?: number;
  menuContainerBackgroundColor?: string;
  menuContainerShadow?: boolean;
  menuContainerBorderRadius?: number;
  menuContainerDividerColor?: TailwindColors;
  menuContainerPaddingX?: number;
  menuContainerPaddingY?: number;
  menuItemsFontSize?: number;
  menuItemsTextColor?: string;
  menuItemsPaddingX?: number;
  menuItemsPaddingY?: number;
  menuItemsHoverBackground?: TailwindColors;
  menuEditText?: string;
  menuRemoveText?: string;

  commentFontSize?: number;
  commentFontColor?: string;

  commentEditPlaceholder?: string;
  commentEditMarginTop?: number;
  commentEditContainerBackgroundColor?: string;
  commentEditPadding?: number;
  commentEditBorderRadius?: number;
  commentEditShadow?: boolean;
  commentEditScrollbarThin?: boolean;
  commentEditScrollbarThumbColor?: string;
  commentEditScrollbarTrackColor?: string;
  commentEditSaveButtonText?: string;
  commentEditSaveButtonColor?: string;
  commentEditSaveButtonBorderRadius?: number;
  commentEditSaveButtonFontSize?: number;
  commentEditSaveButtonFontWeight?: number;
  commentEditSaveButtonFontColor?: string;
  commentEditSaveButtonPaddingX?: number;
  commentEditSaveButtonPaddingY?: number;
  commentEditSaveButtonShadow?: boolean;

  commentRemovePromptText?: string;
  commentRemoveCancelText?: string;
  commentRemoveConfirmText?: string;
  commentRemoveConfirmButtonBorderRadius?: number;
  commentRemoveConfirmButtonFontSize?: number;
  commentRemoveConfirmButtonFontWeight?: number;
  commentRemoveConfirmButtonFontColor?: string;
  commentRemoveConfirmButtonPaddingX?: number;
  commentRemoveConfirmButtonPaddingY?: number;
  commentRemoveConfirmButtonShadow?: boolean;

  commentReplyButtonColor?: string;
  commentReplyButtonBorderRadius?: number;
  commentReplyButtonFontSize?: number;
  commentReplyButtonFontWeight?: number;
  commentReplyButtonFontColor?: string;
  commentReplyButtonPaddingX?: number;
  commentReplyButtonPaddingY?: number;
  commentReplyButtonShadow?: boolean;

  replyCtaText?: string;
  replyMarginTop?: number;
}
