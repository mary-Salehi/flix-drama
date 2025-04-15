import React from "react";
import { Outlet, useParams } from "react-router-dom";
import PostsFilter from "./PostsFilter";
import PostsPlaylist from "./PostsPlaylist";

function PostsLayout() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start gap-6">
      <PostsFilter/>
      <div className="w-full">
        <PostsPlaylist/>
        <div className="px-5">
          {/* dynamic posts */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default PostsLayout;
