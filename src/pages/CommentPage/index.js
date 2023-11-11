import React from "react";
import { AuthProvider } from "../../contexts/AuthContext.js";
import CommentHeader from "../../components/CommentComponents/CommentHeader/index.jsx";
import CommentsSection from "./../../components/CommentComponents/CommentsSection/index.jsx";

export default function CommentPage() {
  return (
    <AuthProvider>
      <>
        <CommentHeader />
        <CommentsSection />
      </>
    </AuthProvider>
  );
}
