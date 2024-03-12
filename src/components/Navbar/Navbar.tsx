import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { LiaToolsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../../assets/Logo bt snbg 1.png";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={10}
      height={"100px"}
    >
      <Box height={"100px"}>
        <Link to="/">
          <Image
            height={"100%"}
            src={Logo}
            alt="BahaTech"
          />
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"25%"}
        height={"100%"}
      >
        <Link to="/">
          <NavButton aria-selected={location.pathname === "/"}>HOME</NavButton>
        </Link>

        <Link to="/about">
          <NavButton aria-selected={location.pathname === "/about"}>
            ABOUT US
          </NavButton>
        </Link>

        <Link to="/services">
          <NavButton aria-selected={location.pathname === "/services"}>
            SERVICES
          </NavButton>
        </Link>

        <Link to="/store">
          <NavButton aria-selected={location.pathname === "/store"}>
            STORE
          </NavButton>
        </Link>

        <Link to="/contacts">
          <NavButton aria-selected={location.pathname === "/contacts"}>
            CONTACTS
          </NavButton>
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"10%"}
      >
        <Link to="/">
          <LiaToolsSolid color="#009688" />
        </Link>
        <Cart height={"40px"} width={"40px"}/>
        <Link to="/">
          <Button>LOGIN</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
