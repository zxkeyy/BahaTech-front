import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoWhite.png";
import bgImage from "../../assets/FooterImage.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      width="100%"
      bgColor="#292734"
      display="flex"
      justifyContent="center"
      textColor="white"
      aspectRatio={1440 / 300}
      bgImage={bgImage}
    >
      <Box
        width="60%"
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
          <Box width={"100%"} marginTop={"-50px"}>
            <Link to="/">
              <Image height={"100%"} src={Logo} alt="BahaTech" />
            </Link>
          </Box>
          <Text textColor={"white"} fontSize={"14px"}>
            We are the leading security service provider in town. Take your
            business to new heights with the help of our CCTV & Security
            products.
          </Text>
          <Box display="flex">
            <Box
              marginRight={"5%"}
              bgColor={"white"}
              boxSize={"40px"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10"}
            >
              <Link to="https://www.facebook.com">
                <FaFacebookSquare color="#3B5999" size="50px" />
              </Link>
            </Box>
            <Box
              marginRight={"5%"}
              bgColor={"white"}
              boxSize={"40px"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10"}
            >
              <Link to="https://www.whatsapp.com">
                <FaWhatsappSquare color="" fill="#57B960" size="50px" />
              </Link>
            </Box>
            <Box
              marginRight={"5%"}
              bgColor={"white"}
              boxSize={"40px"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10"}
            >
              <Link to="https://www.instagram.com">
                <FaInstagramSquare color="#E4405F" size="50px" />
              </Link>
            </Box>
            <Box
              bgColor={"white"}
              boxSize={"40px"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10"}
            >
              <Link to="https://www.x.com">
                <FaSquareXTwitter color="black" size="50px" />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          width="20%"
          fontSize="14px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading fontSize="20px" fontWeight="bold">
            Our Services
          </Heading>
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
          fontSize="14px"
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
          <Heading fontSize="17px">Subscribe to our E-mail list</Heading>
          <Text fontSize="14px">
            Do you want tto get the information about our Latest News & Updates
            without delay? Subscribe to our Newsletter and get in touch with us.
          </Text>
          <Box width="100%">
            <InputGroup>
              <Input
                bgColor={"white"}
                colorScheme="white"
                placeholder="Email Address"
                textColor={"black"}
                fontSize={"12px"}
              ></Input>
              <InputRightElement width="fit-content">
                <Button colorScheme="teal" borderLeftRadius={0}>
                  Sign Up
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
