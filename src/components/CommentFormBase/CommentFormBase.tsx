import React, { useState } from "react";

import StyledButton from "../StyledButton";
import { CommentFormBaseProps } from "./interface";

function CommentFormBase({
  user,
  width,
  dir = "ltr",
  buttonMarginTop,
  buttonColor,
  buttonText = "Post comment",
  buttonBorderRadius,
  buttonFontColor,
  buttonFontSize,
  buttonFontWeight,
  buttonPaddingX,
  buttonPaddingY,
  buttonFullWidth,
  buttonShadow,
  textareaPlaceholder = "Write a comment...",
  textareaBackgroundColor = "white",
  textareaTextColor = "#111827",
  textareaDefaultRows = 5,
  textareaBorderColor,
  textareaPaddingLeft,
  textareaPaddingRight,
  textareaPaddingTop,
  textareaPaddingBottom,
  textareaBorderRadius,
  avatarBorderRadius,
  avatarSize = 24,
}: CommentFormBaseProps) {
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    if (isSubmitting) return;

    if (!user) {
      setError("Please login first");
      return;
    }

    // TODO make a call to create a comment with the user, body and itemIdentifier
  }

  return (
    <div style={{ width: width || "100%" }} dir={dir}>
      <div
        className="shadow"
        style={{
          backgroundColor: textareaBackgroundColor,
          borderColor: textareaBorderColor,
          paddingLeft: textareaPaddingLeft,
          paddingRight: textareaPaddingRight,
          paddingTop: textareaPaddingTop,
          paddingBottom: textareaPaddingBottom,
          borderRadius: textareaBorderRadius,
        }}
      >
        {/* {user && (
          <div
            className="flex items-center"
            style={{
              marginBottom: 12,
              padding: textareaPaddingLeft ? textareaPaddingLeft / 2 : 0,
            }}
          >
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className="object-cover"
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
            <div style={{ width: 12 }} />
            <p style={{ fontSize: 14 }}>{user.name}</p>
          </div>
        )} */}
        <textarea
          rows={textareaDefaultRows}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={textareaPlaceholder}
          required
          className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none placeholder-gray-300"
          style={{
            backgroundColor: textareaBackgroundColor,
            color: textareaTextColor,
            paddingLeft: textareaPaddingLeft ? textareaPaddingLeft * 0.5 : 0,
            paddingRight: textareaPaddingRight ? textareaPaddingRight * 0.5 : 0,
          }}
        />
        <div className="flex justify-end">
          <StyledButton
            type="button"
            text={buttonText}
            mt={buttonMarginTop}
            buttonColor={buttonColor}
            borderRadius={buttonBorderRadius}
            fontSize={buttonFontSize}
            fontWeight={buttonFontWeight}
            fontColor={buttonFontColor}
            paddingX={buttonPaddingX}
            paddingY={buttonPaddingY}
            full={buttonFullWidth}
            shadow={buttonShadow}
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex justify-end">
          {error && (
            <p
              className="text-sm text-right"
              style={{
                color: "red",
                marginTop: 4,
                marginRight: 4,
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentFormBase;
