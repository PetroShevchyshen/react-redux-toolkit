import { FC } from "react";
import PostItem from "./PostItem";
import { postApi } from "../services/PostService";

export const PostContainer: FC = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(5);
  return (
    <div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts && posts.map((item) => <PostItem key={item.id} post={item} />)}
      </div>
    </div>
  );
};

export default PostContainer;
