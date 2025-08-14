const Header = () => {
  return (
    <div className="Header flex w-full justify-between items-center px-12 py-4 text-gray-300 absolute top-0">
      <h1 className="text-3xl font-primaryBold text-violet-400">Mohib Khan</h1>
  <nav>
    <ul className="flex gap-10 m-0 p-0 list-none font-primary">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Experience</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
    </div>
  );
};

export default Header;
