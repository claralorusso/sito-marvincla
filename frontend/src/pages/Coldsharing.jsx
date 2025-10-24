// src/pages/ColdSharing.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Icon,
  Flex,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaSearchLocation,
  FaCheckCircle,
  FaLeaf,
  FaTruck,
  FaWarehouse,
  FaBoxOpen,
} from "react-icons/fa";

const MotionBox = motion(Box);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ColdSharing() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/Sfondo Cold Sharing.png"
          alt="ColdSharing Hero"
          w="100%"
          h={["80vh", "90vh", "100vh"]}
          objectFit="cover"
          filter="brightness(0.68)"
        />

        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          display="flex"
          flexDir="column"
          justifyContent="center"
          color="white"
          px={[6, 12, 24]}
          zIndex={1}
        >
          <MotionBox
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            maxW="5xl"
            textAlign="left"
          >
            <Heading fontSize={["2xl", "3xl", "4xl"]} color="teal.100" mb={3}>
              🧊 COLD SHARING
            </Heading>

            <Heading fontSize={["3xl", "4xl", "5xl"]} lineHeight="1.2" mb={6}>
              Il primo Marketplace B2B che digitalizza<br />la condivisione del freddo
            </Heading>

            <Text fontSize="xl" maxW="3xl" mb={8}>
              Dove tecnologia, sostenibilità e collaborazione ridisegnano il futuro
              della logistica agroalimentare.
            </Text>

            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              boxShadow="lg"
              _hover={{ bg: "teal.400" }}
              onClick={() => scrollToId("cos-e")}
            >
              Scopri Coldsharing →
            </Button>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== COS’È ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]} id="cos-e">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          mb={[8, 10]}
        >
          <Heading size="lg" color="teal.600" mb={2}>
            Cos’è ColdSharing
          </Heading>
          <Text fontSize="xl" fontWeight="semibold" mb={3}>
            Il primo marketplace B2B dedicato alla condivisione del freddo.
          </Text>
          <Text color="gray.700" maxW="5xl">
            ColdSharing, sviluppato da Marvincla, connette aziende agroalimentari,
            logistiche e operatori del freddo. Da PC e smartphone puoi cercare,
            offrire e prenotare celle frigorifere, container e mezzi di trasporto
            refrigerati in modo digitale, tracciabile e sostenibile.
          </Text>
        </MotionBox>

        <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Coldsharing.png"
              alt="Rete ColdSharing"
              rounded="2xl"
              shadow="lg"
            />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading size="md" mb={4}>
              Perché un marketplace del freddo
            </Heading>
            <List spacing={3} color="gray.700" fontSize="lg">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                Disponibilità in tempo reale e geolocalizzata.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                Prenotazioni e gestione completamente online.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                Collaborazione B2B nella filiera del freddo.
              </ListItem>
            </List>
          </MotionBox>

         <Button
              colorScheme="teal"
              size="lg"
              px={8}
              py={6}
              borderRadius="full"
              boxShadow="lg"
              _hover={{ bg: "teal.400" }}
              onClick={() => scrollToId("come-funziona")}
            >
              Scopri come funziona →
            </Button>

        </SimpleGrid>
      </Container>

      {/* ====================== COME FUNZIONA (narrativo) ====================== */}
      <Box id="come-funziona" bg="gray.50" py={[12, 16, 20]}>
        <Container maxW="7xl">
          <Heading textAlign="center" mb={[10, 12]}>
            Come funziona
          </Heading>

          <Flex direction={["column", "column", "row"]} align="center" gap={[8, 12]}>
            <Image
              src="/cold-sharing-logo.png"
              alt="Mappa e connessioni ColdSharing"
              borderRadius="2xl"
              w={["70%", "40%"]}
              boxShadow="lg"
            />

            <Stack spacing={6} w={["100%", "50%"]}>
              <Flex align="center" gap={4}>
                <Icon as={FaSearchLocation} boxSize={8} color="teal.500" />
                <Box>
                  <Heading size="sm" mb={1}>1) Cerca</Heading>
                  <Text color="gray.700">
                    Trova celle, container o mezzi disponibili vicino a te, in tempo reale.
                  </Text>
                </Box>
              </Flex>

              <Flex align="center" gap={4}>
                <Icon as={FaCheckCircle} boxSize={8} color="teal.500" />
                <Box>
                  <Heading size="sm" mb={1}>2) Prenota</Heading>
                  <Text color="gray.700">
                    Gestisci la prenotazione in pochi clic, con conferme e notifiche digitali.
                  </Text>
                </Box>
              </Flex>

              <Flex align="center" gap={4}>
                <Icon as={FaLeaf} boxSize={8} color="teal.500" />
                <Box>
                  <Heading size="sm" mb={1}>3) Refrigera</Heading>
                  <Text color="gray.700">
                    Ottimizza risorse e riduci costi ed emissioni nella logistica a freddo.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Flex>

          <Box textAlign="center" mt={[10, 12]}>
            <Button
              colorScheme="teal"
              size="lg"
              rightIcon={<FaArrowRight />}
              as="a"
              href="https://cellefrigo.net"
              target="_blank"
              rel="noreferrer"
            >
              Registrati su ColdSharing, è gratis!
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ====================== COSA OFFRE ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <Heading size="md" mb={8}>
          Cosa offre
        </Heading>

        <SimpleGrid columns={[1, 3]} spacing={8}>
          <MotionBox
            p={6}
            borderWidth="1px"
            rounded="2xl"
            bg="white"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Icon as={FaWarehouse} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>
              Celle frigorifere
            </Heading>
            <Text color="gray.600">
              Stoccaggi temporanei in ambienti certificati e monitorati.
            </Text>
          </MotionBox>

          <MotionBox
            p={6}
            borderWidth="1px"
            rounded="2xl"
            bg="white"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Icon as={FaBoxOpen} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>
              Container frigo
            </Heading>
            <Text color="gray.600">
              Capacità modulare e flessibile per picchi di domanda.
            </Text>
          </MotionBox>

          <MotionBox
            p={6}
            borderWidth="1px"
            rounded="2xl"
            bg="white"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Icon as={FaTruck} color="teal.500" boxSize={8} mb={3} />
            <Heading size="sm" mb={2}>
              Trasporto refrigerato
            </Heading>
            <Text color="gray.600">
              Camion e furgoni a temperatura controllata.
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* ====================== VANTAGGI ====================== */}
      <Box as="section" bg="white" py={[12, 16, 20]} id="vantaggi">
        <Container maxW="7xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading size="md" mb={6}>
              Perché usarlo
            </Heading>

            <SimpleGrid columns={[1, 2]} spacing={8}>
              <Box>
                <Heading size="sm" mb={4}>
                  Vantaggi per le imprese
                </Heading>
                <List spacing={3} color="gray.700">
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Riduci i costi operativi grazie alla condivisione del freddo.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Digitalizza la logistica con gestione e tracciabilità online.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Collabora con aziende complementari della filiera.
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading size="sm" mb={4}>
                  Impatto sostenibile
                </Heading>
                <List spacing={3} color="gray.700">
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Riduci emissioni e sprechi energetici.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Ottimizza spazi e mezzi refrigerati condivisi.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    Contribuisci a una logistica agroalimentare più green.
                  </ListItem>
                </List>
              </Box>
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* ====================== CHIUSURA ====================== */}
      <Box bg="teal.700" color="white" textAlign="center" py={[12, 16]}>
        <Container maxW="7xl">
          <Heading mb={3}>
            ColdSharing. Condividere il freddo non è mai stato così semplice.
          </Heading>
          <Text color="whiteAlpha.900">
            La rete che connette domanda e offerta di capacità refrigerata.
          </Text>
        </Container>
      </Box>
    </>
  );
}
