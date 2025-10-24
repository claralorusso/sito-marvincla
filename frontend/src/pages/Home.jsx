// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom"
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  HStack,
  SimpleGrid,
  Container,
  Icon,
  List,
  ListItem,
  ListIcon,
  Stack,
  Divider,
} from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaHeadset,
  FaLaptop,
  FaSmile,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence, px } from "framer-motion";

const MotionBox = motion(Box);

// Helper: smooth scroll verso una sezione per id
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// === SLIDES ===
const slides = [
  {
    image: "/Sfondo HOME.png",
    headline:
      "Marvincla. Il polo digitale che accompagna il settore agroalimentare nella trasformazione verso il futuro.",
    subtitle:
      "Un ecosistema di servizi e piattaforme che unisce innovazione tecnologica, analisi dei dati e conoscenza del settore per guidare la crescita delle imprese agroalimentari.",
    cta: "Scopri di più", // → va a 'vision'
    ctaTarget: "vision",
  },
  {
    image: "//Sfondo HOME.pngg",
    headline:
      "Trasformiamo la filiera agroalimentare con dati, intelligenza artificiale, siti, e-commerce e piattaforme digitali.",
    subtitle:
      "Dalla terra ai mercati globali, integriamo tecnologia, strategia e competenza per rendere la filiera più efficiente, intelligente e connessa.",
    cta: "Scopri le nostre soluzioni",
    ctaTarget: "vision",
  },
  {
    image: "/hero-/Sfondo HOME.png",
    headline:
      "Dove l’innovazione incontra la filiera. Tecnologia, dati e visione strategica al servizio dell’agroalimentare.",
    subtitle:
      "Sviluppiamo soluzioni digitali, strumenti di analisi e piattaforme basate su intelligenza artificiale per aiutare le aziende a evolversi, connettersi e competere.",
    cta: "Inizia la trasformazione",
    ctaTarget: "vision",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src={slides[index].image}
          alt="Marvincla Hero"
          w="100%"
          h={["80vh", "90vh", "100vh"]}
          objectFit="cover"
        />

        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,0.40)"
          display="flex"
          alignItems="center"
        >
          <Box color="white" px={["6", "12", "24"]} maxW="6xl">
            <AnimatePresence mode="wait">
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                textAlign="left"
              >
                {/* Logo + Nome */}
                <Box display="flex" alignItems="center" gap={4} mb={10}>
                  <Image
                    src="/Logo Marvincla.png"
                    alt="Marvincla"
                    boxSize={["90px", "110px", "130px"]}
                    objectFit="contain"
                    // Per renderlo bianco su sfondo scuro: togli il commento
                    // style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <Heading
                    fontSize={["2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                    color="white"
                    textTransform="uppercase"
                    letterSpacing="wide"
                  >
                    Marvincla
                  </Heading>
                </Box>

                <Heading size="2xl" mb={6} lineHeight="1.15" letterSpacing="-0.5px">
                  {slides[index].headline}
                </Heading>

                <Text fontSize="xl" mb={8} color="gray.100" maxW="4xl">
                  {slides[index].subtitle}
                </Text>

                <Button
                  colorScheme="teal"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  borderRadius="full"
                  boxShadow="lg"
                  _hover={{ bg: "teal.400" }}
                  onClick={() => scrollToId(slides[index].ctaTarget)}
                >
                  🔹 {slides[index].cta}
                </Button>
              </MotionBox>
            </AnimatePresence>
          </Box>
        </Box>

        {/* Frecce */}
        <IconButton
          aria-label="Previous"
          icon={<FaArrowLeft />}
          position="absolute"
          top="50%"
          left="6"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          onClick={prev}
          variant="ghost"
          fontSize="2xl"
        />
        <IconButton
          aria-label="Next"
          icon={<FaArrowRight />}
          position="absolute"
          top="50%"
          right="6"
          transform="translateY(-50%)"
          colorScheme="whiteAlpha"
          onClick={next}
          variant="ghost"
          fontSize="2xl"
        />

        {/* Pallini */}
        <HStack
          position="absolute"
          bottom="6"
          left="50%"
          transform="translateX(-50%)"
          spacing={2}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              w={i === index ? 4 : 3}
              h={i === index ? 4 : 3}
              borderRadius="full"
              bg={i === index ? "teal.300" : "whiteAlpha.700"}
              cursor="pointer"
              transition="all 0.3s"
              onClick={() => setIndex(i)}
            />
          ))}
        </HStack>
      </Box>

      {/* ====================== IL NOSTRO PROGETTO DI PUNTA ====================== */}
      <Container id="progetto-punta" maxW="7xl" py={[12, 16, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={10} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading size="lg" color="teal.600" mb={3}>
              Il nostro progetto di punta
            </Heading>
            <Heading mb={4}>
              ColdSharing. Il primo marketplace B2B che digitalizza la condivisione del freddo.
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={6}>
              Nato all’interno di Marvincla, ColdSharing mette in rete
              aziende agroalimentari, logistiche e operatori del freddo, ottimizzando l’uso di celle
              e trasporti refrigerati. Un progetto che incarna la nostra missione: trasformare la filiera
              agroalimentare con tecnologie intelligenti, favorendo sostenibilità, collaborazione e nuove
              opportunità di business.
            </Text>
            <Button
              as={RouterLink}
              to="/coldsharing"
              colorScheme="teal"
              size="lg"
            >
              🔹 Scopri il progetto ColdSharing
            </Button>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/cold-sharing-logo.png"
              alt="ColdSharing"
              rounded="lg"
              shadow="lg"
            />
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== DA VISIONE A INNOVAZIONE (target CTA) ====================== */}
      <Container id="vision" maxW="7xl" py={[12, 16, 20]}>
        <Stack spacing={6}>
          <Heading>Da visione a innovazione</Heading>
          <Text fontSize="lg" color="gray.700">
            Marvincla è una Startup innovativa che nasce dall’incontro tra visione imprenditoriale e competenza tecnologica.
            Un progetto che dà forma concreta alla trasformazione digitale del settore agroalimentare,
            costruendo ponti tra tradizione e innovazione. Siamo una società innovativa titolare del marchio
            ColdSharing, e ogni giorno costruiamo un ecosistema digitale che connette produttori, fornitori
            e logistiche in una rete efficiente e sostenibile.
          </Text>

          {/* La nostra visione */}
          <Box>
            <Heading size="md" mb={3}>La nostra visione</Heading>
            <Text fontSize="lg" color="gray.700">
              Crediamo in un futuro in cui il valore del cibo non si misura solo in quantità, ma in intelligenza,
              collaborazione e sostenibilità. Accompagniamo le imprese nel loro percorso di crescita e innovazione,
              aiutandole a competere in un mercato globale e tecnologico. Il nostro obiettivo: diventare il punto di
              riferimento digitale dell’agroalimentare italiano.
            </Text>
          </Box>

          {/* Cosa facciamo */}
          <Box id="services">
            <Heading size="md" mb={3}>Cosa facciamo</Heading>
            <List spacing={2} fontSize="lg" color="gray.700">
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                <b>Servizi digitali</b> → siti web, advertising, social strategy.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                <b>Business Intelligence</b> → analisi, dati, reportistica di mercato.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                <b>Sviluppo software e piattaforme IT</b> → soluzioni su misura per la filiera.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="teal.500" />
                <b>Intelligenza Artificiale integrata</b> → automatizziamo, analizziamo, valorizziamo i dati.
              </ListItem>
            </List>

            <Button mt={6} colorScheme="teal" onClick={() => scrollToId("services")}>
              🔹 Scopri di più
            </Button>
          </Box>
        </Stack>
      </Container>

      <Divider />

      {/* ====================== PERCHÉ MARVINCLA ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <Heading mb={6}>Perché Marvincla</Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          Perché offriamo un unico interlocutore per tutto il digitale agroalimentare.
          Coniughiamo competenza tecnologica, conoscenza diretta della filiera e visione strategica.
          Non vendiamo strumenti, costruiamo percorsi di crescita. Aiutiamo le aziende a scegliere dove andare,
          quando e con quali mezzi, massimizzando ogni investimento.
        </Text>
        <SimpleGrid columns={[1, 3]} spacing={8}>
          {[
            { icon: FaLaptop, title: "Digitale end-to-end" },
            { icon: FaGlobe, title: "Filiera connessa" },
            { icon: FaHeadset, title: "Supporto strategico" },
          ].map((it, i) => (
            <MotionBox
              key={i}
              p={6}
              borderWidth="1px"
              rounded="2xl"
              whileHover={{ y: -4 }}
              transition="0.2s"
            >
              <Icon as={it.icon} color="teal.500" boxSize={8} mb={3} />
              <Heading size="md" mb={2}>{it.title}</Heading>
              <Text color="gray.600">
                Soluzioni e accompagnamento continuo per risultati misurabili.
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>

           <Button
              as={RouterLink}
              to="/chisiamo"
              colorScheme="teal"
              size="lg"
              margin={'8px'}
              >
              🔹 Scopri chi siamo
            </Button>
      </Container>

      {/* ====================== PAYOFF ====================== */}
      <Box bg="gray.50" py={[14, 20]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Dove l’innovazione incontra la filiera.</Heading>
          <Text fontSize="lg" color="gray.700">
            Tradizione, tecnologia e strategia. Un solo ecosistema per il futuro dell’agroalimentare.
          </Text>
        </Container>
      </Box>
    </>
  );
}
