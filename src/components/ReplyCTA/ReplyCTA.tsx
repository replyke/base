import React from "react";
import { ReplyCTAProps } from "./interface";
import { BiCommentDetail } from "react-icons/bi";

function ReplyCTA({ showReply, replyCtaText, marginTop }: ReplyCTAProps) {
  return (
    <button type="button" onClick={showReply} className="flex">
      <BiCommentDetail className="h-4 w-4" style={{ marginTop: 4 }} />

      <div style={{ width: 4 }} />
      <p className="text-sm">{replyCtaText || "Reply"}</p>
    </button>
  );
}

export default ReplyCTA;
