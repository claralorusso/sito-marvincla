// src/pages/provacoldsharing.jsx
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
  FaPlusCircle,
} from "react-icons/fa";
import Lottie from "lottie-react"; // npm i lottie-react

const MotionBox = motion(Box);

// --- Lottie JSON per il flusso Cerca → Prenota → Refrigera (senza text-layer) ---
const coldSharingLottie = {
  v: "5.7.8",
  fr: 60,
  ip: 0,
  op: 240,
  w: 1024,
  h: 260,
  nm: "ColdSharing Flow Updated",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Path",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [512, 130, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "sh",
          nm: "line",
          ks: { a: 0, k: { i: [], o: [], v: [[-420, 0], [420, 0]], c: false } },
        },
        {
          ty: "st",
          o: { a: 0, k: 50 },
          w: { a: 0, k: 4 },
          lc: 2,
          lj: 2,
          ml: 4,
          nm: "Stroke",
          c: { a: 0, k: [0.6, 0.75, 0.8, 1] },
        },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
      ],
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Pointer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [92, 130, 0], e: [932, 130, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
            { t: 236 },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [16, 16] }, nm: "dot" },
        { ty: "fl", c: { a: 0, k: [0, 0.65, 0.64, 1] }, o: { a: 0, k: 100 }, nm: "fill" },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
      ],
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Truck",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [0] },
            { t: 108, s: [0], e: [100] },
            { t: 112, s: [100], e: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 1, k: [{ t: 108, s: [380, 130, 0], e: [800, 130, 0] }, { t: 192 }] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, -10] }, s: { a: 0, k: [70, 32] }, r: { a: 0, k: 8 } },
        { ty: "fl", c: { a: 0, k: [0.22, 0.75, 0.7, 1] }, o: { a: 0, k: 100 } },
        { ty: "rc", p: { a: 0, k: [30, -18] }, s: { a: 0, k: [30, 24] }, r: { a: 0, k: 6 } },
        { ty: "fl", c: { a: 0, k: [0.7, 0.9, 0.92, 1] }, o: { a: 0, k: 100 } },
        { ty: "el", p: { a: 0, k: [-20, 8] }, s: { a: 0, k: [16, 16] } },
        { ty: "fl", c: { a: 0, k: [0.2, 0.2, 0.25, 1] }, o: { a: 0, k: 100 } },
        { ty: "el", p: { a: 0, k: [12, 8] }, s: { a: 0, k: [16, 16] } },
        { ty: "fl", c: { a: 0, k: [0.2, 0.2, 0.25, 1] }, o: { a: 0, k: 100 } },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
      ],
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Fridge",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [960, 120, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 200, s: [100, 100, 100], e: [115, 115, 100] },
            { t: 220, s: [115, 115, 100], e: [100, 100, 100] },
          ],
        },
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, 10] }, s: { a: 0, k: [44, 80] }, r: { a: 0, k: 6 } },
        { ty: "fl", c: { a: 0, k: [0.85, 0.97, 1, 1] }, o: { a: 0, k: 100 } },
        { ty: "rc", p: { a: 0, k: [0, -18] }, s: { a: 0, k: [40, 2] }, r: { a: 0, k: 0 } },
        { ty: "fl", c: { a: 0, k: [0.7, 0.9, 0.95, 1] }, o: { a: 0, k: 100 } },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
      ],
    },
  ],
};

export default function Partner() {
  const lottieData = React.useMemo(() => coldSharingLottie, []);

  const steps = [
    {
      title: "Cerca",
      desc:
        "Trova celle, container o mezzi disponibili vicino a te, in tempo reale.",
    },
    {
      title: "Prenota",
      desc:
        "Gestisci la prenotazione in pochi clic, con conferme e notifiche digitali.",
    },
    {
      title: "Refrigera",
      desc:
        "Ottimizza risorse e riduci costi ed emissioni nella logistica a freddo.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/cold-sharing-logo.png"
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
              Flusso ColdSharing
            </Heading>
            <Text fontSize="lg" opacity={0.95}>
              Cerca → Prenota → Refrigera
            </Text>
          </MotionBox>
        </Box>
      </Box>

      {/* ====================== FLUSSO ====================== */}
      <Container maxW="7xl" py={[8, 14]}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          bg="white"
          p={[6, 8]}
          borderRadius="2xl"
          boxShadow="lg"
        >
          {/* Etichette in griglia (niente absolute, niente overlap) */}
          <MotionBox
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            whileInView="show"
          >
            <SimpleGrid columns={[1, 3]} spacing={[4, 6]} mb={4}>
              {steps.map((s, i) => (
                <MotionBox key={s.title} variants={itemVariants}>
                  <Heading size="sm" color="teal.800" mb={1}>
                    {s.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {s.desc}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Lottie */}
          <Box
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            p={[3, 4]}
            bg="gray.50"
          >
            <Lottie
              animationData={lottieData}
              loop={false}
              autoplay
              style={{
                width: "100%",
                maxWidth: 1100,
                height: 280,
                margin: "0 auto",
              }}
              aria-label="Animazione flusso ColdSharing"
              role="img"
            />
          </Box>
        </MotionBox>
      </Container>

      {/* ====================== RESTO PAGINA (vantaggi/partner/cta) ====================== */}
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

        <Box textAlign="center" mb={12}>
          <Heading size="lg" mb={2}>
            I nostri partner
          </Heading>
          <Text color="gray.600">
            Le aziende che condividono la nostra visione di innovazione nella filiera agroalimentare.
          </Text>
        </Box>

        <Box p={8} borderWidth="1px" borderRadius="2xl" boxShadow="lg" mb={12} bg="white">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <Image src="/refrom-logo.png" alt="Refrom Italia" boxSize="80px" objectFit="contain" />
            <Box>
              <Heading size="md" mb={2}>Refrom Italia — Celle frigorifere</Heading>
              <Text mb={3}>
                Specializzata nella progettazione e realizzazione di impianti frigoriferi e celle su
                misura per il settore agroalimentare.
              </Text>
              <Link href="https://www.refromitalia.it" color="teal.500" fontWeight="bold" isExternal>
                🌐 Visita il sito →
              </Link>
            </Box>
          </Stack>
        </Box>

        <Text fontStyle="italic" fontSize="lg" textAlign="center" color="gray.700" mb={16}>
          🧩 “Un ecosistema aperto: ogni partner aggiunge valore, ogni collaborazione genera innovazione.”
        </Text>

        <MotionBox
          bg="teal.50"
          borderRadius="2xl"
          p={[8, 12]}
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading size="lg" mb={4}>Diventa partner di Marvincla</Heading>
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

      <Box bg="gray.900" color="gray.100" py={16} textAlign="center">
        <Container maxW="6xl">
          <Heading size="md" mb={3}>
            Insieme, costruiamo un ecosistema digitale che connette competenze e opportunità.
          </Heading>
          <Text fontSize="lg">Marvincla: dove la collaborazione diventa innovazione.</Text>
        </Container>
      </Box>
    </>
  );
}
