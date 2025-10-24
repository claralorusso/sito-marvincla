// src/pages/Contatti.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  VStack,
  HStack,
  Icon,
  useToast,
  FormErrorMessage,
  Divider,
  Link,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const MotionBox = motion(Box);

export default function Contatti() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    nome: "",
    email: "",
    azienda: "",
    telefono: "",
    messaggio: "",
    privacy: false,
  });
  const [touched, setTouched] = useState({});

  const errors = {
    nome: !values.nome ? "Inserisci il tuo nome" : "",
    email: !values.email
      ? "Inserisci la tua email"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
      ? "Email non valida"
      : "",
    messaggio: values.messaggio.length < 10 ? "Scrivi almeno 10 caratteri" : "",
    privacy: !values.privacy ? "Devi accettare l’informativa privacy" : "",
  };
  const isInvalid = (field) => touched[field] && errors[field];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // marca tutto come toccato per mostrare gli errori
    setTouched({
      nome: true,
      email: true,
      azienda: true,
      telefono: true,
      messaggio: true,
      privacy: true,
    });

    // Se c’è qualche errore, fermati
    if (errors.nome || errors.email || errors.messaggio || errors.privacy) {
      toast({
        title: "Controlla i campi richiesti.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      // 👉 Qui inserirai la tua logica d’invio:
      // - fetch a un endpoint (es. /api/contact)
      // - EmailJS
      // - Form backend (Netlify/Formspark, ecc.)
      console.log("Form inviato:", values);

      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo al più presto.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setValues({
        nome: "",
        email: "",
        azienda: "",
        telefono: "",
        messaggio: "",
        privacy: false,
      });
      setTouched({});
    } catch (err) {
      toast({
        title: "Errore durante l’invio.",
        description: "Riprova tra pochi minuti.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO CONTATTI */}
      <Box bg="teal.700" color="white" py={[12, 14, 16]}>
        <Container maxW="7xl">
          <Heading size="2xl" mb={4}>Contattaci</Heading>
          <Text fontSize="lg" opacity={0.9} maxW="3xl">
            Raccontaci il tuo progetto: ti aiuteremo a trasformarlo in un percorso
            digitale concreto e misurabile.
          </Text>
        </Container>
      </Box>

      <Container maxW="7xl" py={[12, 16, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={[8, 12, 16]} alignItems="start">
          {/* FORM */}
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading size="lg" mb={6}>Scrivici</Heading>
            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={5} align="stretch">
                <FormControl isInvalid={!!isInvalid("nome")}>
                  <FormLabel>Nome e cognome *</FormLabel>
                  <Input
                    name="nome"
                    placeholder="Es. Mario Rossi"
                    value={values.nome}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
                  />
                  <FormErrorMessage>{errors.nome}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!isInvalid("email")}>
                  <FormLabel>Email *</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="esempio@email.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <HStack spacing={4} align="start">
                  <FormControl>
                    <FormLabel>Azienda</FormLabel>
                    <Input
                      name="azienda"
                      placeholder="Nome azienda"
                      value={values.azienda}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Telefono</FormLabel>
                    <Input
                      name="telefono"
                      placeholder="+39 ..."
                      value={values.telefono}
                      onChange={handleChange}
                    />
                  </FormControl>
                </HStack>

                <FormControl isInvalid={!!isInvalid("messaggio")}>
                  <FormLabel>Messaggio *</FormLabel>
                  <Textarea
                    name="messaggio"
                    rows={6}
                    placeholder="Raccontaci cosa ti serve..."
                    value={values.messaggio}
                    onChange={handleChange}
                    onBlur={() => setTouched((t) => ({ ...t, messaggio: true }))}
                  />
                  <FormErrorMessage>{errors.messaggio}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!isInvalid("privacy")}>
                  <Checkbox
                    name="privacy"
                    isChecked={values.privacy}
                    onChange={handleChange}
                  >
                    Acconsento al trattamento dei dati secondo l’{" "}
                    <Link href="/privacy" color="teal.600" textDecoration="underline">
                      informativa privacy
                    </Link>.
                  </Checkbox>
                  <FormErrorMessage>{errors.privacy}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  rightIcon={<FaArrowRight />}
                  isLoading={loading}
                  alignSelf="flex-start"
                >
                  Invia
                </Button>
              </VStack>
            </Box>
          </MotionBox>

          {/* INFO + MAPPA */}
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Heading size="lg" mb={6}>I nostri contatti</Heading>

            <Card mb={6} variant="outline">
              <CardHeader pb={0}>
                <Heading size="sm" color="teal.700">
                  Marvincla S.R.L. — Polo digitale per l’agroalimentare
                </Heading>
              </CardHeader>
              <CardBody>
                <VStack align="stretch" spacing={3}>
                  <HStack>
                    <Icon as={FaEnvelope} color="teal.500" />
                    <Text>
                      <Link href="mailto:info@marvincla.it">info@marvincla.it</Link>
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaPhoneAlt} color="teal.500" />
                    <Text>
                      <Link href="tel:+39000000000">+39 000 000 0000</Link>
                    </Text>
                  </HStack>
                  <HStack align="start">
                    <Icon as={FaMapMarkerAlt} color="teal.500" mt="2px" />
                    <Text>Via Giuseppe Semerari, 7, 70132 Bari (BA) - Italia </Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} color="teal.500" />
                    <Text>Lun–Ven 09:00/13:00–14:00/18:00</Text>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>

            <Box rounded="2xl" overflow="hidden" borderWidth="1px">
              {/* Sostituisci la src con la tua mappa Google (Embed) */}
            <Box
              as="iframe"
              title="Mappa Marvincla"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12213.969112447854!2d16.8073638!3d41.1373499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347ef4ee9d66a15%3A0x14ac839c9d4e9814!2sVia%20Giuseppe%20Semerari%2C%207%2C%2070132%20Bari%20BA!5e0!3m2!1sit!2sit!4v1698062399000!5m2!1sit!2sit"
              w="100%"
              h="300px"
              border={0}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </Box>
          </MotionBox>
        </SimpleGrid>

        <Divider my={14} />

        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
        >
          <Heading mb={3}>Parliamo del tuo progetto</Heading>
          <Text color="gray.600" mb={6}>
            Ti rispondiamo entro 1–2 giorni lavorativi.
          </Text>
          <Button colorScheme="teal" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Torna al form
          </Button>
        </MotionBox>
      </Container>
    </>
  );
}
