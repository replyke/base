import React, { useState } from "react";
import { CommentMenuBaseProps } from "./interface";

function CommentMenuBase({
  edit,
  remove,
  buttonPadding,
  buttonBackgroundColor,
  buttonBorderRadius,
  buttonIconColor,
  containerWidth,
  containerBackgroundColor = "white",
  containerShadow,
  containerBorderRadius,
  containerDividerColor = "gray",
  containerPaddingX,
  containerPaddingY,
  itemsFontSize,
  itemsTextColor,
  itemsPaddingX,
  itemsPaddingY,
  // itemsHoverBackground,
  editText = "Edit",
  removeText = "Remove",
}: CommentMenuBaseProps) {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuShowing((ims) => !ims)}
        type="button"
        style={{
          padding: buttonPadding,
          backgroundColor: buttonBackgroundColor,
          borderRadius: buttonBorderRadius,
          color: buttonIconColor,
        }}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>

      <div
        className={`z-10 absolute right-0 top-10 divide-y divide-${containerDividerColor}-100 ${
          containerShadow && "shadow"
        } ${isMenuShowing ? "" : "hidden"}`}
        style={{
          width: containerWidth,
          backgroundColor: containerBackgroundColor,
          borderRadius: containerBorderRadius,
          fontSize: itemsFontSize,
          color: itemsTextColor,
          padding: `${containerPaddingY || 0}px ${containerPaddingX || 0}px`,
        }}
      >
        <div
          onClick={() => {
            edit();
            setIsMenuShowing(false);
          }}
          style={{
            padding: `${itemsPaddingY || 0}px ${itemsPaddingX || 0}px`,
          }}
          className={`w-full text-left cursor-pointer hover:bg-gray-200`}
        >
          {editText}
        </div>
        <div
          onClick={() => {
            remove();
            setIsMenuShowing(false);
          }}
          className={`w-full text-left cursor-pointer hover:bg-gray-200`}
          style={{
            padding: `${itemsPaddingY || 0}px ${itemsPaddingX || 0}px`,
          }}
        >
          {removeText}
        </div>
      </div>
    </div>
  );
}

export default CommentMenuBase;
