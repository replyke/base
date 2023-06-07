import React, { useState } from "react";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import {AuthenticationModal} from "../AuthenticationModal";
import { StatsBarBaseProps } from "./interface";

function StatsBarBase({
  user,
  width,
  loginText = "Login",
  loginFontSize,
  loginFontColor,
  paddingX,
  paddingY,
  fontSize,
  fontColor,
  iconsSize,
  marginBottom,
  borderBottomColor,
  borderBottomStyle,
  borderBottomWidth,
  avatarSize,
  avatarBorderRadius,
  usernameFontSize,
  usernameFontWeight,
  itemsGap,
  authenticationHeaderText,
  authenticationEmailAddressPromptText,
  authenticationEmailPlaceholder,
  authenticationPasswordPlaceholder,
  authenticationRepeatPasswordPlaceholder,
  authenticationLoginAccountButtonText,
  authenticationCreateAccountButtonText,
  authenticationDontHaveAnAccountText,
  authenticationCreateOneNowText,
  authenticationAlreadyHaveAnAccountText,
  authenticationLoginInsteadText,
  authenticationButtonsColor,
  authenticationButtonsTextColor,
}: StatsBarBaseProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <AuthenticationModal
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
        headerText={authenticationHeaderText}
        emailAddressPromptText={authenticationEmailAddressPromptText}
        emailPlaceholder={authenticationEmailPlaceholder}
        passwordPlaceholder={authenticationPasswordPlaceholder}
        repeatPasswordPlaceholder={authenticationRepeatPasswordPlaceholder}
        loginAccountButtonText={authenticationLoginAccountButtonText}
        createAccountButtonText={authenticationCreateAccountButtonText}
        dontHaveAnAccountText={authenticationDontHaveAnAccountText}
        createOneNowText={authenticationCreateOneNowText}
        alreadyHaveAnAccountText={authenticationAlreadyHaveAnAccountText}
        loginInsteadText={authenticationLoginInsteadText}
        buttonsColor={authenticationButtonsColor}
        buttonsTextColor={authenticationButtonsTextColor}
      />
      <div
        style={{
          width: width || "100%",
          display: "flex",
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingRight: paddingX,
          paddingLeft: paddingX,
          marginBottom,
          borderBottom: borderBottomWidth,
          borderBottomStyle,
          borderBottomColor,
        }}
      >
        <div className="flex items-center" dir="ltr">
          <BiLike
            style={{ height: iconsSize, width: iconsSize, color: fontColor }}
          />
          <p className="mx-1" style={{ fontSize, color: fontColor }}>
            1.2K
          </p>
        </div>
        <div style={{ width: itemsGap }} />
        <div className="flex items-center cursor-pointer" dir="ltr">
          <BiCommentDetail
            style={{ height: iconsSize, width: iconsSize, color: fontColor }}
          />
          <p className="mx-1" style={{ fontSize, color: fontColor }}>
            32
          </p>
        </div>
        <div className="flex-grow" />
        {user ? (
          <div className="flex items-center">
            <p
              style={{
                fontWeight: usernameFontWeight,
                fontSize: usernameFontSize,
              }}
            >
              {user.name}
            </p>
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className="mx-2 object-cover"
                style={{
                  borderRadius: avatarBorderRadius,
                  height: avatarSize,
                  width: avatarSize,
                }}
              />
            ) : (
              <div
                className="mx-2 bg-gray-300 flex items-center justify-center border"
                style={{
                  borderRadius: avatarBorderRadius,
                  height: avatarSize,
                  width: avatarSize,
                }}
              >
                <BsFillPersonFill
                  style={{ width: 15, height: 15, color: "#9c9c9c" }}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <p
              style={{
                fontSize: loginFontSize,
                color: loginFontColor,
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => setIsLoginModalOpen(true)}
            >
              {loginText}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default StatsBarBase;
