import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      {/* <Flex px={2} width="100%" alignItems="center" /> */}
      <div>
        <Link component={StyledLink} variant="nav" to="/">
          User Platform
        </Link>
      </div>
      <div>
        <Link component={StyledLink} variant="nav" to="/create-user">
          + Add new user
        </Link>
      </div>
    </div>
  );
};
