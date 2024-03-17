import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Hero from "./Components/Hero";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";
import Panel4 from "./Components/Panel4";
import Panel5 from "./Components/Panel5";
import Image1 from "../../assets/Panel6Image1.png";
import Image2 from "../../assets/Panel6Image2.png";
import Image3 from "../../assets/Panel6Image3.png";
import Panel6 from "./Components/Panel6";

const HomePage = () => {
  return (
    <Box bgColor={"bg.500"}>
      <Hero />
      <Panel1 />
      <Panel2 />
      <Panel3 />
      <Panel4 />
      <Panel5 />
      <Panel6 />
    </Box>
  );
};

export default HomePage;
