// src/pages/ChiSiamo.jsx
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
  Stack,
  Avatar,
  List,
  ListItem,
  ListIcon,
  Tag,
  Wrap,
  WrapItem,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
  FaHandshake,
  FaTruck,
  FaLeaf,
} from "react-icons/fa";

const MotionBox = motion(Box);

export default function ChiSiamo() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <Box position="relative" overflow="hidden">
        <Image
          src="/Chisiamo.png"
          alt="Marvincla - Dove l’innovazione incontra la filiera"
          w="100%"
          h={["40vh", "48vh", "56vh"]}
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
                Marvincla è una Startup innovativa nata per guidare il settore
                agroalimentare nella trasformazione digitale. Uniamo competenze
                tecnologiche e conoscenza diretta della filiera per creare soluzioni
                che semplificano i processi, valorizzano le imprese e connettono
                l’ecosistema agroalimentare.
              </Text>
            </MotionBox>
          </Container>
        </Box>
      </Box>

      {/* ====================== STORIA ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          mb={[8, 10]}
        >
          <Heading size="lg" mb={3}>La nostra storia</Heading>
          <Text color="gray.700" fontSize="lg" maxW="5xl">
            Marvincla nasce dall’idea di connettere <b>tradizione e innovazione</b> nella
            filiera agroalimentare. Le competenze dei soci, diverse e complementari,
            si intrecciano per trasformare bisogni reali in <b>soluzioni digitali</b>.
            La sinergia di esperienze maturate in ambito informatico, operativo e
            gestionale rappresenta il <b>valore aggiunto</b> che ha permesso di passare
            dall’idea all’azione imprenditoriale.
          </Text>
        </MotionBox>

        <SimpleGrid columns={[1, 3]} spacing={8}>
          <Box p={6} rounded="2xl" borderWidth="1px">
            <Heading size="sm" mb={2}>Come nasciamo</Heading>
            <Text color="gray.700">
              Dall’incontro tra visione imprenditoriale, tecnologia e conoscenza della filiera.
            </Text>
          </Box>
          <Box p={6} rounded="2xl" borderWidth="1px">
            <Heading size="sm" mb={2}>Cosa facciamo</Heading>
            <Text color="gray.700">
              Disegniamo e sviluppiamo piattaforme, servizi digitali e processi data-driven per l’agroalimentare.
            </Text>
          </Box>
          <Box p={6} rounded="2xl" borderWidth="1px">
            <Heading size="sm" mb={2}>Come lavoriamo</Heading>
            <Text color="gray.700">
              Strategia, progettazione e sviluppo in un ciclo continuo, in stretta collaborazione con le imprese.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== COSA FACCIAMO ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <Heading size="lg" mb={6}>Cosa facciamo</Heading>
        <SimpleGrid columns={[1, 3]} spacing={8}>
          <MotionBox p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s">
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaProjectDiagram} color="teal.500" boxSize={6} />
              <Heading size="sm">Piattaforme & Software</Heading>
            </Stack>
            <Text color="gray.700">
              Soluzioni su misura per la filiera: marketplace B2B, portali, integrazioni e automazioni.
            </Text>
          </MotionBox>

          <MotionBox p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s">
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaUsers} color="teal.500" boxSize={6} />
              <Heading size="sm">Servizi digitali</Heading>
            </Stack>
            <Text color="gray.700">
              Siti, e-commerce, advertising, content e strumenti di comunicazione per i mercati.
            </Text>
          </MotionBox>

          <MotionBox p={6} rounded="2xl" borderWidth="1px" whileHover={{ y: -3 }} transition="0.2s">
            <Stack direction="row" align="center" mb={3}>
              <Icon as={FaLeaf} color="teal.500" boxSize={6} />
              <Heading size="sm">Dati & Sostenibilità</Heading>
            </Stack>
            <Text color="gray.700">
              Analisi, reportistica e ottimizzazione di processi e logistica (freddo, trasporti, stock).
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Container>

      <Divider />

      {/* ====================== COMPETENZE CHE SI COMPLETANO ====================== */}
      <Container maxW="7xl" py={[12, 16, 20]}>
        <MotionBox
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={[8, 10]}
        >
          <Heading size="lg" mb={2}>Competenze diverse, una sola direzione</Heading>
          <Text color="gray.700" maxW="4xl" mx="auto">
            Le competenze dei soci, differenti e complementari, si <b>arricchiscono reciprocamente</b>
            e permettono di raggiungere obiettivi concreti: dalla definizione strategica alla
            realizzazione tecnica e alla validazione sul campo.
          </Text>
        </MotionBox>

        <SimpleGrid columns={[1, 3]} spacing={8}>
          {/* Vincenzo */}
          <MotionBox
            p={6}
            rounded="2xl"
            borderWidth="1px"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Vincenzo Traversa" src="/team-vincenzo.jpg" />
              <Heading size="md">Vincenzo Traversa</Heading>
              <Text color="teal.600" fontWeight="semibold">CEO & Founder · Ingegnere Gestionale</Text>
              <Text color="gray.700" textAlign="center">
                Ingegnere e consulente logistico. Gestione clienti e <b>traduzione requisiti</b> in specifiche tecniche;
                <b> project management</b> end-to-end (pianificazione, coordinamento, budget).
                Esperienza trasversale nel <b>freddo</b>.
              </Text>
              <Wrap justify="center">
                {["Project Management", "Requirement Engineering", "Budget & KPI", "Filiera del freddo"].map((t) => (
                  <WrapItem key={t}>
                    <Tag colorScheme="teal" variant="subtle">{t}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
              <List spacing={2} alignSelf="stretch" color="gray.700">
                <ListItem><ListIcon as={FaProjectDiagram} color="teal.500" />Coordinamento progetti e team</ListItem>
                <ListItem><ListIcon as={FaUsers} color="teal.500" />Allineamento business-tech & governance</ListItem>
              </List>
            </Stack>
          </MotionBox>
          
          {/* Clara */}
          <MotionBox
            p={6}
            rounded="2xl"
            borderWidth="1px"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Clara Lorusso" src="/team-clara.jpg" />
              <Heading size="md">Clara Lorusso</Heading>
              <Text color="teal.600" fontWeight="semibold">CTO & Co-Founder · Software Developer</Text>
              <Text color="gray.700" textAlign="center">
                Informatica e Software Developer. Competenze in <b>TypeScript/Javascript</b>,
                <b> sviluppo software</b>, integrazioni e <b>database</b> (PostgreSQL, MySQL, MongoDB).
              </Text>
              <Wrap justify="center">
                {["TypeScript", "JS", "Laravel/PHP", "MySQL", "MongoDB", "PostgreSQL"].map((t) => (
                  <WrapItem key={t}>
                    <Tag colorScheme="teal" variant="subtle">{t}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
              <List spacing={2} alignSelf="stretch" color="gray.700">
                <ListItem><ListIcon as={FaCode} color="teal.500" />Sviluppo piattaforme e integrazioni</ListItem>
                <ListItem><ListIcon as={FaDatabase} color="teal.500" />Modelli dati e performance DB</ListItem>
              </List>
            </Stack>
          </MotionBox>

          {/* Mario */}
          <MotionBox
            p={6}
            rounded="2xl"
            borderWidth="1px"
            whileHover={{ y: -3 }}
            transition="0.2s"
          >
            <Stack align="center" spacing={4}>
              <Avatar size="xl" name="Mario Traversa" src="/team-mario.jpg" />
              <Heading size="md">Mario Traversa</Heading>
              <Text color="teal.600" fontWeight="semibold">COO & Co-Founder · Responsabile Commerciale</Text>
              <Text color="gray.700" textAlign="center">
                Dottore in Economia e Commercio.
                Gestione Clienti, coordinamento <b>risorse e manutenzioni</b>, conoscenza
                diretta del settore <b>agroalimentare</b> e rete con aziende primarie.
                Alimenta il database e guida i <b>test</b> prima del go-live.
              </Text>
              <Wrap justify="center">
                {["Account Management", "Operazioni", "Manutenzioni", "Agroalimentare"].map((t) => (
                  <WrapItem key={t}>
                    <Tag colorScheme="teal" variant="subtle">{t}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
              <List spacing={2} alignSelf="stretch" color="gray.700">
                <ListItem><ListIcon as={FaHandshake} color="teal.500" />Interfaccia cliente & offerta spazi idonei</ListItem>
                <ListItem><ListIcon as={FaTruck} color="teal.500" />Coordinamento attività operative sul campo</ListItem>
              </List>
            </Stack>
          </MotionBox>
       </SimpleGrid>
        {/* Sinergia finale */}
        <MotionBox
          mt={[10, 12]}
          p={[6, 8]}
          rounded="2xl"
          borderWidth="1px"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          textAlign="center"
        >
          <Heading size="md" mb={3}>La nostra sinergia</Heading>
          <Text color="gray.700" maxW="5xl" mx="auto">
            Tecnico (Clara) + Operativo/Commerciale (Mario) + Gestione/PM (Vincenzo).
            Tre prospettive che si completano in un unico obiettivo:
            <b> portare valore misurabile alla filiera agroalimentare</b> con prodotti digitali utili,
            sostenibili e facili da adottare.
          </Text>
        </MotionBox>
      </Container>

      {/* ====================== PAYOFF ====================== */}
      <Box bg="gray.50" py={[12, 16]}>
        <Container maxW="7xl" textAlign="center">
          <Heading mb={3}>Marvincla. Innovazione al servizio della filiera.</Heading>
          <Text color="gray.700" mb={6}>
            Dati, tecnologia e persone che lavorano insieme per far crescere le imprese.
          </Text>
          <Button as="a" href="/contatti" colorScheme="teal" rightIcon={<FaArrowRight />}>
            Parliamone insieme
          </Button>
        </Container>
      </Box>
    </>
  );
}
