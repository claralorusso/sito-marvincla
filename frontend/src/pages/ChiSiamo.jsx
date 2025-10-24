// src/pages/ChiSiamo.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Icon,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLightbulb, FaLink, FaGlobe } from "react-icons/fa";

const MotionBox = motion(Box);

export default function ChiSiamo() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        {/* Usa un’immagine o un breve video come sfondo (campo, logistica, dati, persone) */}
        <Image
          src="/about-hero.jpg"
          alt="Marvincla - Dove l’innovazione incontra la filiera"
          w="100%"
          h={["60vh", "70vh", "80vh"]}
          objectFit="cover"
          filter="brightness(0.6)"
        />

        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          display="flex"
          alignItems="center"
          color="white"
          px={[6, 10, 16]}
        >
          <Container maxW="7xl">
            <MotionBox
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              maxW="5xl"
            >
              <Heading fontSize={["2xl", "3xl", "4xl"]} mb={4}>
                Dove l’innovazione incontra la filiera
              </Heading>
              <Text fontSize="lg" opacity={0.95} mb={8}>
                Marvincla è una società innovativa nata per guidare il settore
                agroalimentare nella sua trasformazione digitale. Uniamo competenze
                tecnologiche e conoscenza diretta della filiera per creare soluzioni
                che semplificano i processi, valorizzano le imprese e connettono
                l’intero ecosistema agroalimentare. Siamo il punto di incontro tra
                tradizione e innovazione, tra chi produce valore e chi lo fa crescere
                con i dati, la tecnologia e la visione strategica.
              </Text>
              <Button
                colorScheme="teal"
                size="lg"
                rightIcon={<FaArrowRight />}
                as="a"
                href="/coldsharing"
              >
                Scopri ColdSharing
              </Button>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* ====================== MISSION ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <SimpleGrid columns={[1, 3]} spacing={[6, 8, 10]} alignItems="start">
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            p={[0, 2]}
          >
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaLightbulb} color="teal.500" boxSize={6} />
              <Heading size="lg">La nostra mission</Heading>
            </Stack>
            <Text fontSize="lg" color="gray.700">
              Accompagnare il settore agroalimentare nella trasformazione digitale.
              Offriamo strumenti, servizi e piattaforme per aiutare le imprese a
              crescere, innovarsi e aprirsi a nuovi mercati, migliorando efficienza,
              sostenibilità e competitività. La tecnologia non è un fine, ma un
              mezzo per potenziare il valore reale delle persone, dei prodotti e
              dei territori.
            </Text>
            <Box
              mt={4}
              fontStyle="italic"
              color="gray.600"
              borderLeft="4px solid"
              borderColor="teal.500"
              pl={4}
            >
              “Innovazione al servizio della filiera, non al suo posto.”
            </Box>
          </MotionBox>

          {/* ====================== VISION ====================== */}
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            p={[0, 2]}
          >
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaGlobe} color="teal.500" boxSize={6} />
              <Heading size="lg">La nostra vision</Heading>
            </Stack>
            <Text fontSize="lg" color="gray.700">
              Immaginiamo un futuro in cui l’agroalimentare sia connesso, trasparente
              e sostenibile. Un ecosistema in cui i dati guidano le decisioni, la
              collaborazione genera valore e la tecnologia diventa il motore di una
              crescita intelligente. Vogliamo diventare il punto di riferimento
              digitale dell’agroalimentare italiano.
            </Text>
            <Box
              mt={4}
              fontStyle="italic"
              color="gray.600"
              borderLeft="4px solid"
              borderColor="teal.500"
              pl={4}
            >
              “Un nuovo modello di filiera: intelligente, condivisa, digitale.”
            </Box>
          </MotionBox>

          {/* ====================== PERCHE' MARVINCLA (VALORE) ====================== */}
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            p={[0, 2]}
          >
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaLink} color="teal.500" boxSize={6} />
              <Heading size="lg">Perché Marvincla</Heading>
            </Stack>
            <Text fontSize="lg" color="gray.700">
              Siamo un ponte tra imprese e tecnologia: trasformiamo bisogni reali in
              soluzioni digitali concrete. Dalla strategia ai dati, dai siti alle
              piattaforme e all’intelligenza artificiale, costruiamo percorsi di
              crescita misurabili e sostenibili per la filiera.
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== TEAM / LEADERSHIP ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={[10, 12]}
        >
          <Heading size="lg" mb={2}>
            Chi guida Marvincla
          </Heading>
          <Text color="gray.600">
            Visione, strategia e innovazione per trasformare la filiera agroalimentare
          </Text>
        </MotionBox>

        <SimpleGrid columns={[1, 3]} spacing={[8, 8, 10]}>
          {/* Vincenzo */}
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            p={6}
            borderWidth="1px"
            rounded="2xl"
            _hover={{ shadow: "md", transform: "translateY(-3px)" }}
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Vincenzo Traversa" src="/team-vincenzo.jpg" />
              <Box textAlign="center">
                <Heading size="md">Vincenzo Traversa</Heading>
                <Text color="teal.600" fontWeight="semibold">
                  CEO & Founder
                </Text>
              </Box>
              <Text color="gray.700" textAlign="center">
                Imprenditore e fondatore di Marvincla. Guida la visione strategica e
                lo sviluppo dei progetti, rendendo la tecnologia un alleato concreto
                per le imprese agroalimentari.
              </Text>
              <Box
                fontStyle="italic"
                color="gray.600"
                borderLeft="4px solid"
                borderColor="teal.500"
                pl={4}
                w="100%"
              >
                “L’innovazione ha senso solo se semplifica la vita di chi produce valore.”
              </Box>
            </Stack>
          </MotionBox>

          {/* Clara */}
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            p={6}
            borderWidth="1px"
            rounded="2xl"
            _hover={{ shadow: "md", transform: "translateY(-3px)" }}
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Clara Lorusso" src="/team-clara.jpg" />
              <Box textAlign="center">
                <Heading size="md">Clara Lorusso</Heading>
                <Text color="teal.600" fontWeight="semibold">
                  CTO & Co-Founder
                </Text>
              </Box>
              <Text color="gray.700" textAlign="center">
                Informatica e responsabile tecnico. Coordina lo sviluppo delle
                piattaforme e l’integrazione dell’IA nei progetti del gruppo.
              </Text>
              <Box
                fontStyle="italic"
                color="gray.600"
                borderLeft="4px solid"
                borderColor="teal.500"
                pl={4}
                w="100%"
              >
                “Il digitale è il linguaggio con cui traduciamo i bisogni della filiera
                in soluzioni reali.”
              </Box>
            </Stack>
          </MotionBox>

          {/* Mario */}
          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true }}
            p={6}
            borderWidth="1px"
            rounded="2xl"
            _hover={{ shadow: "md", transform: "translateY(-3px)" }}
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Mario Traversa" src="/team-mario.jpg" />
              <Box textAlign="center">
                <Heading size="md">Mario Traversa</Heading>
                <Text color="teal.600" fontWeight="semibold">
                  COO & Partner
                </Text>
              </Box>
              <Text color="gray.700" textAlign="center">
                Dottore in Economia e Commercio. Traduce i bisogni delle imprese in
                processi chiari, sostenibili e scalabili, collegando business e
                innovazione tecnologica.
              </Text>
              <Box
                fontStyle="italic"
                color="gray.600"
                borderLeft="4px solid"
                borderColor="teal.500"
                pl={4}
                w="100%"
              >
                “Ogni trasformazione digitale parte dalla comprensione del mercato reale.”
              </Box>
            </Stack>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* ====================== CTA / PAYOFF ====================== */}
      <Box bg="gray.50" py={[12, 16]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Dove l’innovazione incontra la filiera.</Heading>
          <Text color="gray.700" mb={6}>
            Tradizione, tecnologia e strategia. Un solo ecosistema per il futuro
            dell’agroalimentare.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaArrowRight />} as="a" href="/contatti">
            Parliamo del tuo progetto
          </Button>
        </Container>
      </Box>
    </>
  );
}
