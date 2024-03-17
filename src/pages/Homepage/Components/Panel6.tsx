import { Heading, Button, Text, Box } from '@chakra-ui/react'
import Image1 from '../../../assets/Panel6Image1.png'
import Image2 from '../../../assets/Panel6Image2.png'
import Image3 from '../../../assets/Panel6Image3.png'

const Panel6 = () => {
  return (
    <Box
        aspectRatio={1920 / 800}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Heading>Our Projects</Heading>
        <Box
          marginTop={"5%"}
          display={"flex"}
          justifyContent={"space-between"}
          color={"white"}
          width={"1000px"}
        >
          <Box
            aspectRatio={350 / 425}
            bgImage={Image1}
            bgSize={"100%"}
            width={"300px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"end"}
            padding={"3%"}
          >
            <Text fontSize={"14px"}>WIRELESS CAMS</Text>
            <Heading fontSize={"22px"}>Confidential information</Heading>
          </Box>
          <Box
            aspectRatio={350 / 425}
            bgImage={Image2}
            bgSize={"100%"}
            width={"300px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"end"}
            padding={"3%"}
          >
            <Text fontSize={"14px"}>ALARMS & LOCKS</Text>
            <Heading fontSize={"22px"}>Fingerprint Door Lock</Heading>
          </Box>
          <Box
            aspectRatio={350 / 425}
            bgImage={Image3}
            bgSize={"101%"}
            width={"300px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"end"}
            padding={"3%"}
          >
            <Text fontSize={"14px"}>HOME SECURITY</Text>
            <Heading fontSize={"22px"}>Smartphone Home App</Heading>
          </Box>
        </Box>
        <Button
          marginTop={"5%"}
          style={{ background: `linear-gradient(to right,#1F2247, #009688)` }}
          color={"white"}
          fontSize={"12px"}
          borderRadius={"0px"}
          width={"12%"}
          height={"7%"}
        >
          More About Projects
        </Button>
      </Box>
  )
}

export default Panel6