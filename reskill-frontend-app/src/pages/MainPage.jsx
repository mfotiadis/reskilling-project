import tableImage from "../assets/table.jpg";
import flowersImage from "../assets/flowers.jpg";
import sheepImage from "../assets/sheep.jpg";
import beetsImage from "../assets/beets.jpg";
import cherriesImage from "../assets/cherries.jpg";
import mushroomsImage from "../assets/mushrooms.jpg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState({ photos: [], posts: [] });

  const bottomImagesList = [beetsImage, cherriesImage, mushroomsImage];

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error retrieving all the posts:", error)
      );
  }, []);

  return (
    <div className="p-4">
      <section className="flex flex-col items-center mb-10">
        <header className="text-left mb-10 w-full max-w-screen-lg">
          <h1 className="font-bold text-4xl mb-4">Posts List</h1>
          <p className="text-gray-500 w-2/3">
            Subheading that sets up context, shares more about the author, or
            generally gets people psyched to keep reading.
          </p>
        </header>

        <Link
          to={"/posts/1"}
          state={{
            photo: tableImage,
            post: data.posts[0],
          }}
          className="flex justify-center w-full max-w-screen-lg mx-auto"
        >
          <img
            src={tableImage}
            alt="Table Image"
            className="w-full object-cover"
          />
        </Link>
      </section>

      <div className="mx-12 mb-4 font-bold font-mono text-gray-600">
        {data.posts.length > 0 ? data.posts[0].body : <p>Loading</p>}
      </div>

      <section className="mb-4 flex justify-center space-x-4">
        <Link
          to={"/posts/2"}
          state={{
            photo: flowersImage,
            post: data.posts[1],
          }}
          className="w-full h-full max-w-lg flex justify-center"
        >
          <img
            src={flowersImage}
            alt="Flowers Image"
            className="object-cover w-full"
          />
        </Link>

        <Link
          to={"/posts/3"}
          state={{
            photo: sheepImage,
            post: data.posts[2],
          }}
          className="w-full h-full max-w-lg flex justify-center h-full"
        >
          <img
            src={sheepImage}
            alt="Sheep Image"
            className="object-cover w-full"
          />
        </Link>
      </section>

      <div className="mx-12 font-bold font-mono text-gray-600">
        {data.posts.length > 0 ? data.posts[1].body : <p>Loading</p>}
        <br />
        {data.posts.length > 0 ? data.posts[2].body : <p>Loading</p>}
      </div>

      <div className="mb-4 text-left">
        <p className="text-3xl font-bold">Related articles or posts</p>
      </div>

      <section className="mb-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.photos.slice(2, 11).map((image, index) => (
            <div key={image.id} className="bg-white rounded-lg">
              <Link
                to={`/posts/${image.id}`}
                state={{
                  photo: bottomImagesList[index % bottomImagesList.length],
                  post: data.posts.find((post) => post.id === image.id),
                }}
              >
                <img
                  src={bottomImagesList[index % bottomImagesList.length]}
                  alt={image.title}
                  className="w-full h-auto rounded-t-lg object-cover"
                />
              </Link>
              <p className="text-sm font-bold text-black mt-2">
                {data.posts.find((post) => post.id === image.id)?.title ||
                  "Title not found"}
              </p>
              <p className="text-sm text-black mt-2">Author</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
