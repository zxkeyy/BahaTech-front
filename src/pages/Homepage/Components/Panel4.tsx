import { Heading, Button, Box, Text } from "@chakra-ui/react";
import { BiShieldQuarter } from "react-icons/bi";
import Image1 from "../../../assets/Panel4Image1.png";

const Panel4 = () => {
  return (
    <Box
      bgImage={Image1}
      aspectRatio={1920 / 638}
      bgSize={"100%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"40%"}
        height={"65%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <BiShieldQuarter color="#009688" size={"30%"} />
        <Heading color={"white"} fontSize={"65px"}>
          Making Your Life Safer
        </Heading>
        <Text
          color={"white"}
          fontSize={"25px"}
          maxWidth={"65%"}
          textAlign={"center"}
        >
          We provide customized security solutions to help protect your people
          and property.
        </Text>
        <Button
          style={{ background: `linear-gradient(to right,#1F2247, #009688)` }}
          color={"white"}
          fontSize={"15px"}
          borderRadius={"0px"}
          width={"25%"}
          height={"15%"}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Panel4;
