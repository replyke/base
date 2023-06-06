import { User } from "../../../types/typings";

export interface CommentFormBaseProps {
  itemIdentifier: string;
  user?: User;
  width?: number;
  dir?: "rtl" | "ltr";
  textareaPlaceholder?: string;
  textareaBackgroundColor?: string;
  textareaTextColor?: string;
  textareaDefaultRows?: number;
  textareaBorderColor?: string;
  textareaPaddingLeft?: number;
  textareaPaddingRight?: number;
  textareaPaddingTop?: number;
  textareaPaddingBottom?: number;
  textareaBorderRadius?: number;
  buttonMarginTop?: number;
  buttonBorderRadius?: number;
  buttonFontSize?: number;
  buttonFontWeight?: number;
  buttonFontColor?: string;
  buttonPaddingX?: number;
  buttonPaddingY?: number;
  buttonColor?: string;
  buttonText?: string;
  buttonFullWidth?: boolean;
  buttonShadow?: boolean;
  avatarSize?: number;
  avatarBorderRadius?: number;
}
