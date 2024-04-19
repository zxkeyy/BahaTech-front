import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo bt snbg 1.png";

const Footer = () => {
  return (
    <Box
      width="100%"
      bgColor="#292734"
      display="flex"
      justifyContent="center"
      textColor="white"
    >
      <Box
        width="70%"
        display={"flex"}
        justifyContent="space-between"
        paddingY={"5%"}
      >
        <Box
          width="20%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box width={"100%"}>
            <Link to="/">
              <Image height={"100%"} src={Logo} alt="BahaTech" />
            </Link>
          </Box>
          <Text textColor={"white"}>
            We are the leading security service provider in town. Take your
            business to new heights with the help of our CCTV & Security
            products.
          </Text>
          <Box display="flex" height="40Px"></Box>
        </Box>
        <Box
          width="20%"
          fontSize="15px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading fontSize="20px">Our Services</Heading>
          <Link to="/">
            <Text>{"> "}CCTV Installation</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Closed Circuit Cameras</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Finger Print Access</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Attendence System</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Home Security</Text>
          </Link>
        </Box>
        <Box
          width="20%"
          fontSize="15px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading fontSize="20px">Useful Links</Heading>
          <Link to="/">
            <Text>{"> "}Support</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Privacy Policy</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Terms Of Use</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Site Map</Text>
          </Link>
          <Link to="/">
            <Text>{"> "}Expert Testimony</Text>
          </Link>
        </Box>
        <Box
          width="20%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading fontSize="20px">Subscribe to our E-mail list</Heading>
          <Text fontSize="15px">
            Do you want tto get the information about our Latest News & Updates
            without delay? Subscribe to our Newsletter and get in touch with us.
          </Text>
          <Box width="100%" height="50px" bgColor="white"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
