import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
export default function Coldsharing() {
  return (
    <>
      {/* HERO SECTION */}
      <Box position="relative" textAlign="center" id="chi-siamo">
        <Image
          src="./cold-sharing-logo.png"
          alt="Viaggio in gruppo"
          w="100%"
          h={["50vh", "60vh", "70vh"]}
          objectFit="cover"
        />
      </Box>
      <Box bg="gray.50" py={20} id="chi-siamo">
        <Container maxW="7xl"></Container>
      </Box>
    </>
  );
}
