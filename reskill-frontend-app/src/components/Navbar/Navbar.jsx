const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white py-4 px-4 flex justify-between items-center">
      <div className="text-xl font-semibold ml-16 mt-6">Site name</div>
      <div className="flex space-x-4 mr-16 mt-6">
        <button className="px-4 py-2 text-black">Page</button>
        <button className="px-4 py-2 text-black">Page</button>
        <button className="px-4 py-2 text-black">Page</button>
        <button className="px-4 py-2 text-white bg-black rounded">
          Button
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
