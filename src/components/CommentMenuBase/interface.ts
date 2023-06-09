import { TailwindColors } from "../interfaces";

export interface CommentMenuBaseProps {
  edit: () => void;
  remove: () => void;

  buttonPadding?: number;
  buttonBackgroundColor?: string;
  buttonBorderRadius?: number;
  buttonIconColor?: string;
  containerWidth?: number;
  containerBackgroundColor?: string;
  containerShadow?: boolean;
  containerBorderRadius?: number;
  containerDividerColor?: TailwindColors;
  containerPaddingX?: number;
  containerPaddingY?: number;
  itemsFontSize?: number;
  itemsTextColor?: string;
  itemsPaddingX?: number;
  itemsPaddingY?: number;
  itemsHoverBackground?: TailwindColors;
  editText?: string;
  removeText?: string;
}
