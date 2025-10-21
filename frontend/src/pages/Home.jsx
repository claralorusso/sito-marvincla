import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaGlobe, FaHeadset, FaLaptop, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box position="relative" textAlign="center">
        <Image
          src="./homepageteal.png"
          alt="home"
          w="100%"
          h="60vh"
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
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            color="white"
          >
            <Heading size="2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Heading>
            <Text fontSize="xl" mt={4}>
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== SEZIONE PERCHÉ SCEGLIERE NOI ====================== */}
      <Box bg="white" py={20} rounded="2xl" mb={20}>
        <Heading textAlign="center" mb={12}>
          Cosa facciamo
        </Heading>

        <SimpleGrid columns={[1, 2, 4]} spacing={10} px={[4, 10]}>
          {[
            {
              icon: FaLaptop,
              title: "Lorem ipsum ",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
            },
            {
              icon: FaGlobe,
              title: "Lorem ipsum ",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
            },
            {
              icon: FaHeadset,
              title: "Lorem ipsum ",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
            },
            {
              icon: FaSmile,
              title: "Lorem ipsum ",
              text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
            },
          ].map((item, i) => (
            <MotionBox
              key={i}
              textAlign="center"
              p={6}
              borderWidth="1px"
              rounded="2xl"
              boxShadow="md"
              whileHover={{ y: -5, scale: 1.03 }}
              transition="0.3s"
            >
              <Icon as={item.icon} boxSize={12} color="teal.400" mb={4} />
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <Text color="gray.600">{item.text}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
      {/* Coldsharing Section */}
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="./cold-sharing-logo.png"
              alt="Coldsharing"
              rounded="lg"
              shadow="lg"
            />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Heading mb={4}>La piattaforma Coldsharing</Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </Text>
            <Button colorScheme="teal">Scopri di più</Button>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* Team Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="7xl">
          <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Heading mb={4}>Chi siamo</Heading>
              <Text fontSize="lg" color="gray.600" mb={6}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </Text>
              <Button colorScheme="teal">La nostra storia</Button>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="team viaggi"
                rounded="lg"
                shadow="lg"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
