import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../../assets/Logo bt snbg 1.png";
import Cart from "./Cart";
import Tools from "./Tools";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <HStack
      bgColor={"bg.500"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100px"}
      paddingX={5}
    >
      <Box height={"100px"}>
        <Link to="/">
          <Image height={"100%"} src={Logo} alt="BahaTech" />
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
        width={"15%"}
        minWidth={"250px"}

      >
        <Tools height={"35px"} width={"35px"} />
        <Cart height={"35px"} width={"35px"} />
        <Link to="/">
          <Button
            bgColor={"black"}
            color={"white"}
            colorScheme="teal"
            borderRadius={"15px"}
            fontSize={"sm"}
            rightIcon={<IoPersonCircle color="#009688" size={30} />}
          >
            LOGIN
          </Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
