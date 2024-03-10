import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={10}
    >
      <Box width={150} height={150}>
        <Link to="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/fdf9/8363/902221d629515d9ca40f27d15248d00a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z2ZUOAF0lA~7YCQmNzT9OryupcdEodvOUnQ7CubjQd8o41OaD6f~lGwtRsSyl2gXjidRnYBEf-EnAKN~b58~VSELp9pEmBiuwDx04f-oQZw9z5SvmO5BMq-yhsGI9CZFY4capPAiJbjgxR51FHdvltIs~LZ8wTCNeHhybG4T946MdhULlbE7QxYUjs6tL1q7BGRHHkbbFYTBn2FIsxfUzb9RLFk6jaVavZHeNS9ykSXDg~5r-LZcuUl3KWbe304~wk4tGhO~yxllVupzC~wbx3uqRucB40lRBFZbg-qKEKWSAf4prhUFtFBnx9aoCC4DKGgDZdkR4EbkeH~hzEHO-w__"
            alt="BahaTech"
          />
        </Link>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"25%"}
      >
        <Link to="/">
          <Text fontSize={16} color={"brand.500"}>
            HOME
          </Text>
        </Link>
        <Link to="/">
          <Text fontSize={16}>ABOUT US</Text>
        </Link>
        <Link to="/">
          <Text fontSize={16}>SERVICES</Text>
        </Link>
        <Link to="/">
          <Text fontSize={16}>STORE</Text>
        </Link>
        <Link to="/">
          <Text fontSize={16}>CONTACTS</Text>
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
        <Link to="/">
          <AiOutlineShoppingCart color="#009688"/>
        </Link>
        <Link to="/">
          <Button>LOGIN</Button>
        </Link>
      </Box>
    </HStack>
  );
};

export default Navbar;
