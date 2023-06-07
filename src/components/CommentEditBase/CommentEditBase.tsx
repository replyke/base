import React, { useState } from "react";
import {StyledButton} from "../StyledButton";
import { CommentEditBaseProps } from "./interface";

function CommentEditBase({
  body,
  onClickCancel,
  placeholder = "Edit your comment..",
  marginTop,
  padding,
  containerBackgroundColor = "white",
  borderRadius,
  shadow,
  scrollbarThin = true,
  scrollbarThumbColor = "#1f1f1f",
  scrollbarTrackColor = "#d6d6d6",
  saveButtonText = "Save",
  saveButtonColor = "blue",
  saveButtonBorderRadius,
  saveButtonFontSize,
  saveButtonFontWeight,
  saveButtonFontColor,
  saveButtonPaddingX,
  saveButtonPaddingY,
  saveButtonShadow,
}: CommentEditBaseProps) {
  const [commentBody, setCommentBody] = useState(body);

  const scrollThumb = `scrollbar-thumb-[${scrollbarThumbColor}]`;
  const scrollTrack = `scrollbar-track-[${scrollbarTrackColor}]`;

  const textareaClassname = `outline-none w-full border-none focus:outline-0 focus:outline-none focus:border-none border-transparent focus:border-transparent focus:ring-0 placeholder-gray-300 ${
    scrollbarThin ? "scrollbar-thin" : "scrollbar"
  } ${scrollThumb} ${scrollTrack}`;

  if (!textareaClassname) return null;

  return (
    <div
      className={`${shadow && "shadow-md"} `}
      style={{
        backgroundColor: containerBackgroundColor,
        marginTop,
        padding,
        borderRadius,
      }}
    >
      <textarea
        rows={3}
        placeholder={placeholder}
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        className={textareaClassname}
        style={{
          padding,
        }}
      />
      <div className="flex justify-end space-x-3" style={{ marginTop: 6 }}>
        <button className="text-sm" onClick={onClickCancel}>
          Cancel
        </button>
        <StyledButton
          type="button"
          text={saveButtonText}
          buttonColor={saveButtonColor}
          borderRadius={saveButtonBorderRadius}
          fontSize={saveButtonFontSize}
          fontWeight={saveButtonFontWeight}
          fontColor={saveButtonFontColor}
          paddingX={saveButtonPaddingX}
          paddingY={saveButtonPaddingY}
          shadow={saveButtonShadow}
        />
      </div>
    </div>
  );
}

export default CommentEditBase;
