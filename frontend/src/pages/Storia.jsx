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

export default function Storia() {
  return (
    <>
      {/* HERO SECTION */}
      <Box position="relative" textAlign="center" id="chi-siamo">
        <Image
          src="./team.png" // 🌅 Sostituiscila con la tua
          alt="Viaggio in gruppo"
          w="100%"
          h={["40vh", "50vh", "60vh"]}
          objectFit="cover"
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color="white"
        >
          <Heading size="2xl" mb={4}>
            Chi Siamo
          </Heading>
          <Text fontSize="xl" maxW="600px">
            La nostra storia
          </Text>
        </Box>
      </Box>
      <Box bg="gray.50" py={20} id="chi-siamo">
        <Container maxW="7xl">
          {/* ====================== SEZIONE CEO ====================== */}
          <SimpleGrid columns={[1]} spacing={10} alignItems="center" mb={20}>
            {/* Testo con animazione */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading mb={4}>Chi Siamo</Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
              <Text fontSize="lg" color="gray.600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </MotionBox>
          </SimpleGrid>
          {/* ====================== SEZIONE CEO ====================== */}
          <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center" mb={20}>
            {/* Immagine con animazione */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="./persona.jpg"
                alt="Il nostro team"
                borderRadius="2xl"
                boxShadow="lg"
              />
            </MotionBox>

            {/* Testo con animazione */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heading mb={4}>Team</Heading>
              <Text fontSize="lg" color="gray.600" mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
              <Text fontSize="lg" color="gray.600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </MotionBox>
          </SimpleGrid>

          {/* ====================== SEZIONE RECENSIONI ====================== */}
          <Box py={20}>
            <Heading textAlign="center" mb={12}>
              I nostri partner
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
              {[
                {
                  name: "Coldsharing",

                  img: "./cold-sharing-logo.png",
                },
                {
                  name: "Coldsharing",

                  img: "./cold-sharing-logo.png",
                },
                {
                  name: "Coldsharing",

                  img: "./cold-sharing-logo.png",
                },
              ].map((review, i) => (
                <MotionBox
                  key={i}
                  bg="white"
                  p={6}
                  rounded="2xl"
                  boxShadow="lg"
                  whileHover={{ scale: 1.03 }}
                  transition="0.3s"
                >
                  <VStack spacing={4}>
                    <Avatar src={review.img} size="xl" />

                    <Heading size="sm" color="teal.500">
                      {review.name}
                    </Heading>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
