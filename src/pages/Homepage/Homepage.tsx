import {
  Box,
} from "@chakra-ui/react";
import Hero from "./Components/Hero";
import Panel1 from "./Components/Panel1";
import Panel2 from "./Components/Panel2";
import Panel3 from "./Components/Panel3";

const HomePage = () => {
  return (
    <Box bgColor={"bg.500"}>
      <Hero />
      <Panel1 />
      <Panel2 />
      <Panel3 />
    </Box>
  );
};

export default HomePage;
