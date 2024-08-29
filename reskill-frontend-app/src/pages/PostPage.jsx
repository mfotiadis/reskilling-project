import { useLocation } from "react-router-dom";

export const PostPage = () => {
  const location = useLocation();
  const image = location.state.photo;
  const post = location.state.post;

  return (
    <div className="flex justify-between mt-16 mb-24 mx-8">
      <div className="flex flex-col items-center max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-left w-full">
          Single Post
        </h1>
        <p className="text-gray-500 mb-6 text-left w-full">{post.title}</p>
        <p className="text-lg text-left w-full break-words">{post.body}</p>
      </div>
      <div className="w-1/3 flex justify-end">
        <img
          src={image}
          alt={image.title}
          className="rounded-lg w-full object-cover p-1"
        />
      </div>
    </div>
  );
};

export default PostPage;
