// src/pages/CosaFacciamo.jsx
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Stack,
  List,
  ListItem,
  ListIcon,
  Icon,
  Divider,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBullseye,
  FaChartBar,
  FaCogs,
  FaRobot,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const fade = (prm) => ({
  initial: { opacity: 0, y: prm?.y ?? 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: prm?.d ?? 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

export default function CosaFacciamo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // ✅ Gestione SEO senza Helmet
  useEffect(() => {
    document.title = "Cosa facciamo | Soluzioni digitali per l’agroalimentare";
    const metaDesc = document.querySelector("meta[name='description']");
    const ogTitle = document.querySelector("meta[property='og:title']");
    const ogDesc = document.querySelector("meta[property='og:description']");
    if (metaDesc) metaDesc.content = "Soluzioni integrate per la trasformazione digitale della filiera agroalimentare: Servizi digitali, Business Intelligence, Sviluppo software e Intelligenza Artificiale.";
    if (ogTitle) ogTitle.content = "Cosa facciamo | Marvincla";
    if (ogDesc) ogDesc.content = "Strategia, dati e tecnologia per rendere la filiera più efficiente, connessa e competitiva.";
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <Box position="relative" overflow="hidden" role="region" aria-label="Cosa facciamo - hero">
        <Box as="picture">
          <source srcSet="/hero-cosafacciamo.avif" type="image/avif" />
          <source srcSet="/hero-cosafacciamo.webp" type="image/webp" />
          <Image
            src="/hero-cosafacciamo-fallback.jpg"
            alt="Illustrazione digitale della filiera agroalimentare"
            w="100%"
            h={{ base: "56vh", md: "64vh", lg: "72vh" }}
            objectFit="cover"
            loading="eager"
          />
        </Box>

        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-b, blackAlpha.700 0%, blackAlpha.600 40%, blackAlpha.700 100%)"
          display="flex"
          alignItems="center"
        >
          <Container maxW="7xl" px={{ base: 6, md: 8, lg: 12 }}>
            <MotionBox
              {...(prefersReducedMotion ? { initial: false } : fade({ y: 20, d: 0.6 }))}
              color="white"
              maxW="5xl"
            >
              <Heading as="h1" size="2xl" lineHeight="1.1" mb={4}>
                ⚙️ Cosa facciamo
              </Heading>
              <Text fontSize="xl" color="whiteAlpha.900" mb={6}>
                Soluzioni integrate per la trasformazione digitale del settore agroalimentare.
                Uniamo strategia, dati e tecnologia per accompagnare le imprese verso l’innovazione.
                Ogni servizio nasce da un obiettivo comune: rendere la filiera più efficiente, connessa e competitiva.
              </Text>
              <Text fontSize="md" color="whiteAlpha.800">
                📈 Dal campo alla rete: il digitale che genera valore.
              </Text>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* ===== SEZIONE: SERVIZI DIGITALI ===== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 6, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
          <MotionBox {...(prefersReducedMotion ? { initial: false } : fade({ y: 28 }))}>
            <Stack spacing={4}>
              <Icon as={FaBullseye} boxSize={10} color="teal.500" />
              <Heading as="h2">Servizi digitali</Heading>
              <Text fontSize="lg" color="gray.700">
                <b>Comunicare, connettere, crescere.</b> Creiamo e gestiamo siti web, portali e piattaforme
                e-commerce pensati per valorizzare le imprese agroalimentari. Costruiamo strategie di digital marketing personalizzate — dal SEO/SEM alle campagne pubblicitarie su Google e social — per generare visibilità e risultati concreti.
              </Text>
              <Text fontSize="sm" color="gray.600">📊 “Dal campo alla rete: il digitale che genera valore.”</Text>

              <List spacing={2} mt={2}>
                {[
                  "Siti web, portali e e-commerce su misura",
                  "Strategie SEO, SEM e pubblicità mirata",
                  "Social Media Management e campagne ADV",
                  "Gestione contenuti multimediali e storytelling aziendale",
                ].map((t, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    {t}
                  </ListItem>
                ))}
              </List>

              <Button as={RouterLink} to="/contatti" colorScheme="teal" mt={6}>
                Richiedi una consulenza
              </Button>
            </Stack>
          </MotionBox>

          <Image
            src="/servizidigitali.png"
            fallbackSrc="/servizi-digitali.jpg"
            alt="Soluzioni digitali per l’agroalimentare"
            objectFit="cover"
            rounded="xl"
            shadow="md"
            loading="lazy"
          />
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ===== SEZIONE: BUSINESS INTELLIGENCE ===== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 6, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
          <Image
            src="/business-intelligence.webp"
            fallbackSrc="/business-intelligence.jpg"
            alt="Analisi dati e trend di mercato agroalimentare"
            objectFit="cover"
            rounded="xl"
            shadow="md"
            loading="lazy"
          />

          <MotionBox {...(prefersReducedMotion ? { initial: false } : fade({ y: 28 }))}>
            <Stack spacing={4}>
              <Icon as={FaChartBar} boxSize={10} color="teal.500" />
              <Heading as="h2">Business Intelligence</Heading>
              <Text fontSize="lg" color="gray.700">
                <b>Dati che diventano decisioni.</b> Forniamo analisi e reportistica personalizzata su
                import/export, domanda e offerta e trend di mercato. Attraverso data analytics, aiutiamo
                le imprese a prendere decisioni basate su evidenze reali.
              </Text>
              <Text fontSize="sm" color="gray.600">🧠 “Trasformiamo i dati in vantaggio competitivo.”</Text>

              <List spacing={2} mt={2}>
                {[
                  "Dashboard interattive per la direzione commerciale",
                  "Analisi import/export, prezzi, domanda e offerta",
                  "Report di settore con indicatori strategici",
                  "Previsioni e simulazioni su dati reali",
                ].map((t, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    {t}
                  </ListItem>
                ))}
              </List>

              <Button as={RouterLink} to="/contatti" colorScheme="teal" mt={6}>
                Richiedi una consulenza
              </Button>
            </Stack>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ===== SEZIONE: SVILUPPO SOFTWARE ===== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 6, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
          <MotionBox {...(prefersReducedMotion ? { initial: false } : fade({ y: 28 }))}>
            <Stack spacing={4}>
              <Icon as={FaCogs} boxSize={10} color="teal.500" />
              <Heading as="h2">Sviluppo software e piattaforme IT</Heading>
              <Text fontSize="lg" color="gray.700">
                <b>Soluzioni su misura per la filiera agroalimentare.</b> Progettiamo software personalizzati,
                gestionali e piattaforme B2B, costruiti attorno alle esigenze specifiche di produttori,
                logistiche e fornitori del settore.
              </Text>
              <Text fontSize="sm" color="gray.600">💻 “Digitalizziamo i processi per migliorare l’efficienza.”</Text>

              <List spacing={2} mt={2}>
                {[
                  "Piattaforme B2B e marketplace verticali",
                  "Integrazioni ERP/CRM/API e sistemi legacy",
                  "Gestionali su misura e app PWA responsive",
                  "Sicurezza e scalabilità cloud-native",
                ].map((t, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    {t}
                  </ListItem>
                ))}
              </List>

              <Button as={RouterLink} to="/contatti" colorScheme="teal" mt={6}>
                Richiedi una consulenza
              </Button>
            </Stack>
          </MotionBox>

          <Image
            src="/sviluppo-software.webp"
            fallbackSrc="/sviluppo-software.jpg"
            alt="Sviluppo software e piattaforme IT"
            objectFit="cover"
            rounded="xl"
            shadow="md"
            loading="lazy"
          />
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ===== SEZIONE: INTELLIGENZA ARTIFICIALE ===== */}
      <Container maxW="7xl" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 6, md: 8, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
          <Image
            src="/ai-integrata.webp"
            fallbackSrc="/ai-integrata.jpg"
            alt="Intelligenza Artificiale integrata nella filiera"
            objectFit="cover"
            rounded="xl"
            shadow="md"
            loading="lazy"
          />

          <MotionBox {...(prefersReducedMotion ? { initial: false } : fade({ y: 28 }))}>
            <Stack spacing={4}>
              <Icon as={FaRobot} boxSize={10} color="teal.500" />
              <Heading as="h2">Intelligenza Artificiale integrata</Heading>
              <Text fontSize="lg" color="gray.700">
                <b>L’AI come motore dell’innovazione.</b> Utilizziamo algoritmi di AI per automatizzare
                attività, analizzare pattern e generare insight che aiutano le imprese a prendere decisioni
                più rapide e mirate.
              </Text>
              <Text fontSize="sm" color="gray.600">🤖 “Dati, automazione e intelligenza per una filiera che pensa in digitale.”</Text>

              <List spacing={2} mt={2}>
                {[
                  "Forecast della domanda e ottimizzazione scorte",
                  "Rilevamento anomalie e qualità prodotto",
                  "Raccomandazioni automatiche e scoring lead",
                  "Automazione dei processi e analisi documentale",
                ].map((t, i) => (
                  <ListItem key={i}>
                    <ListIcon as={FaCheckCircle} color="teal.500" />
                    {t}
                  </ListItem>
                ))}
              </List>

              <Button as={RouterLink} to="/contatti" colorScheme="teal" mt={6}>
                Richiedi una consulenza
              </Button>
            </Stack>
          </MotionBox>
        </SimpleGrid>
      </Container>

        {/* ===== PARTNER IDEALI ===== */}
        <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl" px={{ base: 6, md: 8, lg: 12 }}>
            <Heading as="h2" mb={6} color="teal.600">
            🤝 Partner e sinergie per la crescita
            </Heading>
            <Text fontSize="lg" color="gray.700" mb={4}>
            <b>Aiutiamo le imprese a trovare il partner ideale per raggiungere i propri obiettivi.</b>
            </Text>
            <Text fontSize="lg" color="gray.700" mb={4}>
            Grazie alla nostra rete di contatti e all’esperienza trasversale nel settore agroalimentare,
            mettiamo in connessione produttori, fornitori, distributori e realtà tecnologiche in cerca di
            sinergie concrete.
            </Text>
            <Text fontSize="lg" color="gray.700" mb={4}>
            Crediamo che l’innovazione nasca dalla collaborazione: per questo favoriamo partnership strategiche
            capaci di generare valore, efficienza e nuove opportunità di mercato.
            </Text>
            <Text fontSize="lg" color="gray.700" mb={6}>
            👉 Dalla consulenza iniziale al matching tra imprese, accompagniamo ogni realtà nel creare relazioni
            solide e sostenibili.
            </Text>
            <Button as={RouterLink} to="/partner" colorScheme="teal" size="lg">
            Scopri come diventare partner
            </Button>
        </Container>
        </Box>


      {/* ===== CTA FINALE ===== */}
      <Box bg="gray.50" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Dove l’innovazione incontra la filiera.</Heading>
          <Text fontSize="lg" color="gray.700" mb={6}>
            Un unico interlocutore per la trasformazione digitale del settore agroalimentare.
            Tecnologia, analisi e visione strategica al servizio delle imprese.
          </Text>
          <Button as={RouterLink} to="/contatti" colorScheme="teal" size="lg">
            📞 Richiedi una consulenza
          </Button>
        </Container>
      </Box>
    </>
  );
}
