import React, { useEffect, useState } from "react";
import moment from "moment";

import { BiCommentDetail } from "react-icons/bi";
import { TbThumbUp, TbThumbUpFilled } from "react-icons/tb";

import dummyComments from "../../../dummy";

import CommentMenuBase from "../CommentMenuBase";
import ReplyBox from "../ReplyBox";
import ReplyCTA from "../ReplyCTA";
import CommentEditBase from "../CommentEditBase";
import StyledButton from "../StyledButton";
import { CommentBaseProps } from "./interface";
import { Comment } from "../../../types/typings";

function CommentBase({
  user,
  index,
  comment,
  ReplyComponent,
  depth,
  currentUserId,
  width,
  authorNameColor,
  dir,
  replyIndent = 24,
  threadsSeperatorWidth = 1,
  threadsSeperatorColor = "#E5E7EB",
  threadsSeperatorStyle = "solid",
  marginBottom,
  paddingY,
  paddingX,
  authorAvatarSize = 24,
  authorAvatarBorderRadius,
  dateFontSize,
  dateFontColor,
  menuButtonBackgroundColor,
  menuButtonBorderRadius,
  menuButtonPadding,
  menuButtonIconColor,
  menuContainerWidth,
  menuContainerBackgroundColor,
  menuContainerShadow,
  menuContainerBorderRadius,
  menuContainerDividerColor,
  menuContainerPaddingX,
  menuContainerPaddingY,
  menuItemsFontSize,
  menuItemsTextColor,
  menuItemsPaddingX,
  menuItemsPaddingY,
  menuItemsHoverBackground,
  menuEditText,
  menuRemoveText,
  commentFontSize,
  commentFontColor,
  commentEditPlaceholder,
  commentEditMarginTop,
  commentEditContainerBackgroundColor,
  commentEditPadding,
  commentEditBorderRadius,
  commentEditShadow,
  commentEditScrollbarThin,
  commentEditScrollbarThumbColor,
  commentEditScrollbarTrackColor,
  commentEditSaveButtonText,
  commentEditSaveButtonBorderRadius,
  commentEditSaveButtonColor,
  commentEditSaveButtonFontColor,
  commentEditSaveButtonFontSize,
  commentEditSaveButtonFontWeight,
  commentEditSaveButtonPaddingX,
  commentEditSaveButtonPaddingY,
  commentEditSaveButtonShadow,
  commentRemovePromptText = "Are you sure you want to remove this comment?",
  commentRemoveCancelText = "Cancel",
  commentRemoveConfirmText = "Remove",
  commentRemoveConfirmButtonBorderRadius,
  commentRemoveConfirmButtonFontSize,
  commentRemoveConfirmButtonFontWeight,
  commentRemoveConfirmButtonFontColor,
  commentRemoveConfirmButtonPaddingX,
  commentRemoveConfirmButtonPaddingY,
  commentRemoveConfirmButtonShadow,

  commentReplyButtonColor,
  commentReplyButtonBorderRadius,
  commentReplyButtonFontSize,
  commentReplyButtonFontWeight,
  commentReplyButtonFontColor,
  commentReplyButtonPaddingX,
  commentReplyButtonPaddingY,
  commentReplyButtonShadow,

  replyCtaText,
  replyMarginTop,
}: CommentBaseProps) {
  const [isRemoveShowing, setIsRemoveShowing] = useState(false);
  const [isReplyShowing, setIsReplyShowing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [replies, setReplies] = useState<Comment[] | null>(null);
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);

  const isAuthor = currentUserId === comment.author._id;
  const isFirst = depth === 0;

  let topBorderProperties = {};

  if (isFirst && index !== 0) {
    topBorderProperties = {
      borderTopWidth: threadsSeperatorWidth,
      borderTopColor: threadsSeperatorColor,
      borderTopStyle: threadsSeperatorStyle,
      paddingTop: 24,
    };
  }

  function handleLike() {
    if (!user) {
      alert("To like comments login first");
      return;
    }

    alert("Liked comment");
  }

  useEffect(() => {
    if (!areRepliesVisible || !!replies) return;

    const comRepls: Comment[] = dummyComments.filter(
      (c) => c.parent === comment._id
    );

    setReplies(comRepls);
  }, [areRepliesVisible, replies]);

  return (
    <div
      style={{
        marginLeft: isFirst ? 0 : replyIndent,
        marginBottom,
        width: width,
        padding: `${paddingY}px ${paddingX}px`,
        ...topBorderProperties,
      }}
      dir={dir || "ltr"}
    >
      <div className="flex justify-between items-center mb-2 space-x-3">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center">
            <img
              src={comment.author.img}
              alt={comment.author.name}
              style={{
                width: authorAvatarSize,
                height: authorAvatarSize,
                borderRadius: authorAvatarBorderRadius,
              }}
            />
            <p
              className="mx-2"
              style={{
                color: authorNameColor,
              }}
            >
              {comment.author.name}
            </p>
          </div>
          <p style={{ fontSize: dateFontSize, color: dateFontColor }}>
            {moment(new Date(comment.created_at)).fromNow()}
          </p>
        </div>
        {isAuthor && (
          <CommentMenuBase
            remove={() => setIsRemoveShowing(true)}
            edit={() => setIsEdit(true)}
            buttonPadding={menuButtonPadding}
            buttonBackgroundColor={menuButtonBackgroundColor}
            buttonBorderRadius={menuButtonBorderRadius}
            buttonIconColor={menuButtonIconColor}
            containerWidth={menuContainerWidth}
            containerBackgroundColor={menuContainerBackgroundColor}
            containerShadow={menuContainerShadow}
            containerBorderRadius={menuContainerBorderRadius}
            containerDividerColor={menuContainerDividerColor}
            containerPaddingX={menuContainerPaddingX}
            containerPaddingY={menuContainerPaddingY}
            itemsFontSize={menuItemsFontSize}
            itemsTextColor={menuItemsTextColor}
            itemsPaddingX={menuItemsPaddingX}
            itemsPaddingY={menuItemsPaddingY}
            itemsHoverBackground={menuItemsHoverBackground}
            editText={menuEditText}
            removeText={menuRemoveText}
          />
        )}
      </div>
      {isEdit ? (
        <CommentEditBase
          body={comment.body}
          onClickCancel={() => setIsEdit(false)}
          placeholder={commentEditPlaceholder}
          marginTop={commentEditMarginTop}
          padding={commentEditPadding}
          containerBackgroundColor={commentEditContainerBackgroundColor}
          borderRadius={commentEditBorderRadius}
          shadow={commentEditShadow}
          scrollbarThin={commentEditScrollbarThin}
          scrollbarThumbColor={commentEditScrollbarThumbColor}
          scrollbarTrackColor={commentEditScrollbarTrackColor}
          saveButtonText={commentEditSaveButtonText}
          saveButtonColor={commentEditSaveButtonColor}
          saveButtonBorderRadius={commentEditSaveButtonBorderRadius}
          saveButtonFontSize={commentEditSaveButtonFontSize}
          saveButtonFontWeight={commentEditSaveButtonFontWeight}
          saveButtonFontColor={commentEditSaveButtonFontColor}
          saveButtonPaddingX={commentEditSaveButtonPaddingX}
          saveButtonPaddingY={commentEditSaveButtonPaddingY}
          saveButtonShadow={commentEditSaveButtonShadow}
        />
      ) : (
        <p style={{ fontSize: commentFontSize, color: commentFontColor }}>
          {comment.body}
        </p>
      )}

      {isAuthor && (
        <div
          className="relative overflow-hidden w-full transition-all"
          style={{ height: isRemoveShowing ? 80 : 0 }}
        >
          <div className="pt-3 mt-3 border-t flex items-center space-x-4 ">
            <p className="text-sm flex-grow">{commentRemovePromptText}</p>
            <button
              className="text-sm text-gray-400"
              onClick={() => setIsRemoveShowing(false)}
            >
              {commentRemoveCancelText}
            </button>
            <StyledButton
              text={commentRemoveConfirmText}
              type="button"
              buttonColor="#EF4444"
              borderRadius={commentRemoveConfirmButtonBorderRadius}
              fontSize={commentRemoveConfirmButtonFontSize}
              fontWeight={commentRemoveConfirmButtonFontWeight}
              fontColor={commentRemoveConfirmButtonFontColor}
              paddingX={commentRemoveConfirmButtonPaddingX}
              paddingY={commentRemoveConfirmButtonPaddingY}
              shadow={commentRemoveConfirmButtonShadow}
            />
          </div>
        </div>
      )}

      <div className="flex items-center mt-4">
        <div
          className="flex cursor-pointer"
          style={{
            marginTop: 4,
            color: user && comment.likes.includes(user._id) ? "blue" : "black",
          }}
          onClick={handleLike}
        >
          {user && comment.likes.includes(user._id) ? (
            <TbThumbUpFilled className="w-5 h-5" style={{ color: "blue" }} />
          ) : (
            <TbThumbUp className="w-5 h-5" style={{ color: "black" }} />
          )}

          <div style={{ width: 4 }} />
          <p
            className="text-sm"
            style={{
              color:
                user && comment.likes.includes(user._id) ? "blue" : "black",
            }}
          >
            {comment.likes.length}
          </p>
        </div>
        <div style={{ width: 24 }} />

        {comment.replies_count > 0 && (
          <div
            className="flex cursor-pointer"
            style={{ marginTop: 4 }}
            onClick={() => setAreRepliesVisible((arv) => !arv)}
          >
            <BiCommentDetail className="w-5 h-5" />
            <div style={{ width: 4 }} />
            <p className="text-sm">
              {areRepliesVisible ? "Hide Replies" : comment.replies_count}
            </p>
          </div>
        )}

        <div className="flex-grow" />
        <ReplyCTA
          showReply={() => setIsReplyShowing(true)}
          replyCtaText={replyCtaText}
          marginTop={replyMarginTop}
        />
      </div>

      {isReplyShowing && (
        <ReplyBox
          parentComment={{
            _id: comment._id,
            author: { name: comment.author.name },
          }}
          onClickCancel={() => setIsReplyShowing(false)}
          replyButtonColor={commentReplyButtonColor}
          replyButtonBorderRadius={commentReplyButtonBorderRadius}
          replyButtonFontSize={commentReplyButtonFontSize}
          replyButtonFontWeight={commentReplyButtonFontWeight}
          replyButtonFontColor={commentReplyButtonFontColor}
          replyButtonPaddingX={commentReplyButtonPaddingX}
          replyButtonPaddingY={commentReplyButtonPaddingY}
          replyButtonShadow={commentReplyButtonShadow}
        />
      )}

      {areRepliesVisible && replies && (
        <div
          className="pl-3 mt-4"
          style={{
            borderLeft: 1,
            borderLeftStyle: "solid",
            borderLeftColor: "#D6D3D1",
          }}
        >
          {replies.map((c, i) => (
            <ReplyComponent
              user={user}
              comment={c}
              depth={depth + 1}
              currentUserId="2"
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentBase;
