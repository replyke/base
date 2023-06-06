import { BorderStyles } from "../../../types/typings";

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
export interface StatsBarBaseProps {
  itemIdentifier: string;

  user?: {
    _id: string;
    name: string;
    img?: string;
  };
  width?: number;

  loginText?: string;
  loginFontSize?: number;
  loginFontColor?: string;
  paddingX?: number;
  paddingY?: number;
  fontSize?: number;
  fontColor?: string;
  iconsSize?: number;
  marginBottom?: number;

  borderBottomWidth?: number;
  borderBottomColor?: string;
  borderBottomStyle?: BorderStyles;

  avatarSize?: number;
  avatarBorderRadius?: number;

  usernameFontSize?: number;
  usernameFontWeight?: number;
  itemsGap?: number;

  authenticationHeaderText?: string;
  authenticationEmailAddressPromptText?: string;
  authenticationEmailPlaceholder?: string;
  authenticationPasswordPlaceholder?: string;
  authenticationRepeatPasswordPlaceholder?: string;
  authenticationLoginAccountButtonText?: string;
  authenticationCreateAccountButtonText?: string;
  authenticationDontHaveAnAccountText?: string;
  authenticationCreateOneNowText?: string;
  authenticationAlreadyHaveAnAccountText?: string;
  authenticationLoginInsteadText?: string;
  authenticationButtonsColor?: string;
  authenticationButtonsTextColor?: string;
}
