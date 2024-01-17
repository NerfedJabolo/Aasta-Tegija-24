const Navbar = () => {
  return (
    <nav className="w-[800px] max-w-[100vw] h-16 bg-[rgb(202,_219,_54)] right-0 top-0 absolute">
      <ul className="text-[20px] w-full flex justify-evenly items-center h-full">
        <li className="text-center">
          <a href="/about">About us</a>
        </li>
        <li className="text-center">Timetable</li>
        <li className="text-center">Contacts</li>
        <li className="text-center">Additional Info</li>
      </ul>
    </nav>
  );
};

export default Navbar;
