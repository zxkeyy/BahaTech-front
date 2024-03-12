import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import Image1 from "../../assets/Panel1Image1.png";
import Image2 from "../../assets/Panel1Image2.png";
import Image3 from "../../assets/Panel1Image3.png";
import { FaCheckCircle } from "react-icons/fa";
import Panel1 from "./Components/Panel1";

const HomePage = () => {
  return (
    <Box bgColor={"bg.500"}>
      <Hero />
      <Panel1 />
    </Box>
  );
};

export default HomePage;
