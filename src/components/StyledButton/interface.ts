export interface StyledButtonProps {
    text: string;
    type: "button" | "submit" | "reset";
    onClick?: (...args: any[]) => void;
    disabled?: boolean;
    full?: boolean;
    mt?: number;
    buttonColor?: string;
    borderRadius?: number;
    fontSize?: number;
    fontWeight?: number;
    fontColor?: string;
    paddingX?: number;
    paddingY?: number;
    shadow?: boolean;
  }