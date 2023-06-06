export interface CommentEditBaseProps {
    body: string;
    onClickCancel: () => void;
    placeholder?: string;
    marginTop?: number;
    padding?: number;
    containerBackgroundColor?: string;
    borderRadius?: number;
    shadow?: boolean;
    scrollbarThin?: boolean;
    scrollbarThumbColor?: string;
    scrollbarTrackColor?: string;
    saveButtonText?: string;
    saveButtonColor?: string;
    saveButtonBorderRadius?: number;
    saveButtonFontSize?: number;
    saveButtonFontWeight?: number;
    saveButtonFontColor?: string;
    saveButtonPaddingX?: number;
    saveButtonPaddingY?: number;
    saveButtonShadow?: boolean;
  }