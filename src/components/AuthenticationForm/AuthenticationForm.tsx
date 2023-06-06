import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaTwitter } from "react-icons/fa";
import StyledButton from "../StyledButton";
import { AuthenticationModalProps } from "./interface";



function AuthenticationModal({
  isLoginModalOpen,
  setIsLoginModalOpen,
  headerText = "Log in to comment",
  emailAddressPromptText = "Or with Email Address",
  emailPlaceholder = "Email address",
  passwordPlaceholder = "Password",
  repeatPasswordPlaceholder = "Repeat password",
  loginAccountButtonText = "Login",
  createAccountButtonText = "Create Account",
  dontHaveAnAccountText = "Don't have an account?",
  createOneNowText = "Create one now",
  alreadyHaveAnAccountText = "Already have an account?",
  loginInsteadText = "Login instead",
  buttonsColor,
  buttonsTextColor,
}: AuthenticationModalProps) {
  const [isLoginSlide, setIsLoginSlide] = useState(true);

  return (
    <Modal
      show={isLoginModalOpen}
      dismissible
      onClose={() => setIsLoginModalOpen(false)}
      size="sm"
      className="transition-all ease-in-out"
    >
      <Modal.Header>{headerText}</Modal.Header>
      <Modal.Body className="flex flex-col items-center transition-all ease-in-out">
        <div className="grid grid-cols-4 gap-3 w-max">
          <div className="h-12 w-12 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <FcGoogle style={{ height: 24, width: 24 }} />
          </div>
          <div className="h-12 w-12 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <FaApple style={{ height: 24, width: 24 }} />
          </div>
          <div className="h-12 w-12 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <FaFacebookF style={{ height: 24, width: 24, color: "#4267B2" }} />
          </div>
          <div className="h-12 w-12 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <FaTwitter
              style={{ height: 24, width: 24, color: "#1DA1F2", marginTop: 4 }}
            />
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold">{emailAddressPromptText}</p>
        {isLoginSlide ? (
          <>
            <input
              type="email"
              className="rounded-lg mt-2 text-sm w-full"
              placeholder="Email address"
            />
            <input
              type="password"
              className="rounded-lg mt-2 text-sm w-full"
              placeholder="Password"
            />
            <StyledButton
              type="button"
              text={loginAccountButtonText}
              buttonColor={buttonsColor}
              fontColor={buttonsTextColor}
              mt={8}
              paddingX={16}
              paddingY={8}
              borderRadius={8}
              full
            />
            <p className="mt-4 text-sm">
              {dontHaveAnAccountText}{" "}
              <span
                onClick={() => setIsLoginSlide(false)}
                className="font-semibold hover:underline cursor-pointer"
              >
                {createOneNowText}
              </span>
            </p>
          </>
        ) : (
          <>
            <input
              type="email"
              className="rounded-lg mt-2 text-sm w-full"
              placeholder={emailPlaceholder}
            />
            <input
              type="password"
              className="rounded-lg mt-2 text-sm w-full"
              placeholder={passwordPlaceholder}
            />
            <input
              type="password"
              className="rounded-lg mt-2 text-sm w-full"
              placeholder={repeatPasswordPlaceholder}
            />
            <StyledButton
              type="button"
              text={createAccountButtonText}
              buttonColor={buttonsColor}
              fontColor={buttonsTextColor}
              mt={8}
              paddingX={16}
              paddingY={8}
              borderRadius={8}
              full
            />
            <p className="mt-4 text-sm">
              {alreadyHaveAnAccountText}{" "}
              <span
                onClick={() => setIsLoginSlide(true)}
                className="font-semibold hover:underline cursor-pointer"
              >
                {loginInsteadText}
              </span>
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default AuthenticationModal;
