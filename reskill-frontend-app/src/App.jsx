import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<MainPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
