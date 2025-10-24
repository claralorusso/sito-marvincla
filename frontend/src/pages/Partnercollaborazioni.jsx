// src/pages/Partnercollaborazioni.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
  Divider,
  Stack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaCogs,
  FaBullseye,
  FaPhoneAlt,
  FaGlobe,
  FaPlusCircle,
} from "react-icons/fa";

const MotionBox = motion(Box);

export default function Partner() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/network-bg.jpg" // metti un’immagine ispirazionale tipo “rete digitale / partnership”
          alt="Rete Marvincla"
          w="100%"
          h={["45vh", "50vh", "60vh"]}
          objectFit="cover"
          filter="brightness(0.6)"
        />
        <Box
          position="absolute"
          inset="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          px={[6, 10, 16]}
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            maxW="4xl"
          >
            <Heading fontSize={["2xl", "3xl", "4xl"]} mb={4}>
              Come funziona la rete Marvincla
            </Heading>
            <Text fontSize="lg" opacity={0.95}>
              Quando un’azienda ci contatta per un’esigenza specifica, analizziamo la richiesta
              e la indirizziamo al partner più qualificato del nostro ecosistema.
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== VANTAGGI ====================== */}
      <Container maxW="7xl" py={[10, 16]}>
        <SimpleGrid columns={[1, 3]} spacing={10} mb={16}>
          <VStack spacing={4} align="center">
            <Icon as={FaBullseye} boxSize={10} color="teal.400" />
            <Heading size="md">🎯 Soluzioni mirate</Heading>
            <Text textAlign="center">
              Ogni richiesta viene gestita dallo specialista più adatto del network Marvincla.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <Icon as={FaHandshake} boxSize={10} color="teal.400" />
            <Heading size="md">🤝 Collaborazione trasparente</Heading>
            <Text textAlign="center">
              Marvincla resta il punto di contatto unico, garantendo coordinamento e chiarezza.
            </Text>
          </VStack>
          <VStack spacing={4} align="center">
            <Icon as={FaCogs} boxSize={10} color="teal.400" />
            <Heading size="md">⚙️ Efficienza operativa</Heading>
            <Text textAlign="center">
              Processi rapidi, integrati e sempre orientati al risultato.
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider mb={10} />

        {/* ====================== PARTNER LIST ====================== */}
        <Box textAlign="center" mb={12}>
          <Heading size="lg" mb={2}>
            I nostri partner
          </Heading>
          <Text color="gray.600">
            Le aziende che condividono la nostra visione di innovazione nella filiera agroalimentare.
          </Text>
        </Box>

        <Box
          p={8}
          borderWidth="1px"
          borderRadius="2xl"
          boxShadow="lg"
          mb={12}
          bg="white"
        >
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <Image
              src="/refrom-logo.png" // Inserisci qui il logo del partner
              alt="Refrom Italia"
              boxSize="80px"
              objectFit="contain"
            />
            <Box>
              <Heading size="md" mb={2}>
                Refrom Italia — Celle frigorifere
              </Heading>
              <Text mb={3}>
                Specializzata nella progettazione e realizzazione di impianti frigoriferi e celle su
                misura per il settore agroalimentare.
              </Text>
              <Link
                href="https://www.refromitalia.it"
                color="teal.500"
                fontWeight="bold"
                isExternal
              >
                🌐 Visita il sito →
              </Link>
            </Box>
          </Stack>
        </Box>

        <Text
          fontStyle="italic"
          fontSize="lg"
          textAlign="center"
          color="gray.700"
          mb={16}
        >
          🧩 “Un ecosistema aperto: ogni partner aggiunge valore, ogni collaborazione genera innovazione.”
        </Text>

        {/* ====================== CTA DIVENTA PARTNER ====================== */}
        <MotionBox
          bg="teal.50"
          borderRadius="2xl"
          p={[8, 12]}
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading size="lg" mb={4}>
            Diventa partner di Marvincla
          </Heading>
          <Text mb={8} color="gray.700">
            Sei un’azienda che condivide la nostra visione di innovazione nella filiera agroalimentare?
            Unisciti al nostro network e collabora con noi per offrire nuove soluzioni alle imprese.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            borderRadius="full"
            px={8}
            py={6}
            boxShadow="md"
            leftIcon={<FaPlusCircle />}
            onClick={() => (window.location.href = "/contatti")}
          >
            📩 Candidati come partner
          </Button>
        </MotionBox>
      </Container>

      {/* ====================== CHIUSURA ====================== */}
      <Box bg="gray.900" color="gray.100" py={16} textAlign="center">
        <Container maxW="6xl">
          <Heading size="md" mb={3}>
            Insieme, costruiamo un ecosistema digitale che connette competenze e opportunità.
          </Heading>
          <Text fontSize="lg">
            Marvincla: dove la collaborazione diventa innovazione.
          </Text>
        </Container>
      </Box>
    </>
  );
}
