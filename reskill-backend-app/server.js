const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const responsePhotos = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const responsePosts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = {
      photos: responsePhotos.data,
      posts: responsePosts.data,
    };
    res.json(data);
  } catch (error) {
    console.log("Internal server error fetching posts", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.get("/posts/:id", async (req, res) => {
//   try {
//     const id = req.params["id"];
//     const responsePost = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     const responsePhoto = await axios.get(
//       `https://jsonplaceholder.typicode.com/photos/${id}`
//     );
//     const data = {
//       photo: responsePhoto.data,
//       post: responsePost.data,
//     };
//     res.json(data);
//   } catch (error) {
//     console.log("Internal server error fetching post", error);
//     res.status(500).json({ error: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
