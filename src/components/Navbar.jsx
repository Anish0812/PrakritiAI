import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
