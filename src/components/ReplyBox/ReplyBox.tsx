import React, { useState } from "react";
import StyledButton from "../StyledButton";
import { ReplyBoxProps } from "./interface";

function ReplyBox({
  user,
  parentComment,
  onClickCancel,
  replyButtonColor,
  replyButtonBorderRadius,
  replyButtonFontSize,
  replyButtonFontWeight,
  replyButtonFontColor,
  replyButtonPaddingX,
  replyButtonPaddingY,
  replyButtonShadow,
}: ReplyBoxProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit() {
    if (isSubmitting) return;

    if (!user) {
      setError("Please login first");
      return;
    }

    // TODO make a call to create a reply with the user, body, parent comment and itemIdentifier
  }

  return (
    <div
      className="mt-3 rounded-md shadow-md p-2"
      style={{ backgroundColor: "#fff" }}
    >
      <textarea
        rows={1}
        placeholder={`Replying to ${parentComment.author.name}`}
        className="outline-none text-sm w-full border-none focus:outline-0 focus:outline-none focus:border-none border-transparent focus:border-transparent focus:ring-0 placeholder-gray-300 bg-transparent"
      />
      <div className="flex justify-end space-x-3">
        <button className="text-sm" onClick={onClickCancel}>
          Cancel
        </button>
        <StyledButton
          text="Reply"
          type="button"
          buttonColor={replyButtonColor}
          borderRadius={replyButtonBorderRadius}
          fontSize={replyButtonFontSize}
          fontWeight={replyButtonFontWeight}
          fontColor={replyButtonFontColor}
          paddingX={replyButtonPaddingX}
          paddingY={replyButtonPaddingY}
          shadow={replyButtonShadow}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ReplyBox;
