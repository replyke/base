export interface AuthenticationModalProps {
    setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLoginModalOpen: boolean;
    headerText?: string;
    emailAddressPromptText?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    repeatPasswordPlaceholder?: string;
    loginAccountButtonText?: string;
    createAccountButtonText?: string;
    dontHaveAnAccountText?: string;
    createOneNowText?: string;
    alreadyHaveAnAccountText?: string;
    loginInsteadText?: string;
    buttonsColor?: string;
    buttonsTextColor?: string;
  }