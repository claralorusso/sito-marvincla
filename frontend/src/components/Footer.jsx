import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  Divider,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.800" color="gray.200" py={10} mt={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mb={8}>
          {/* Info aziendali */}
          <Box>
            <Heading size="md" mb={4}>
              Marvincla S.r.l
            </Heading>
            <Text fontSize="sm">Dove l’innovazione incontra la filiera</Text>
          </Box>

          {/* Contatti */}
          <Box>
            <Heading size="md" mb={4}>
              Contatti
            </Heading>
            <Text>Email: marvinclasrl@gmail.com</Text>
            <Text>Tel: +39 111 222 3333</Text>
            <Text>P.IVA: 08760160724</Text>
          </Box>

          {/* Social
          <Box>
            <Heading size="md" mb={3}>
              Seguici
            </Heading>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <FontAwesomeIcon icon={faInstagram} />
                <Box as="i" className="fa-brands fa-instagram fa-lg"></Box>
              </Link>
              <Link href="https://tiktok.com" isExternal>
                <FontAwesomeIcon icon={faTiktok} />
                <Box as="i" className="fa-brands fa-tiktok fa-lg"></Box>
              </Link>
            </HStack>
          </Box> */}
          <Box>
            <Heading size="md" mb={3}>
              Partner
            </Heading>
            <HStack spacing={4}></HStack>
          </Box>
        </SimpleGrid>

        <Divider borderColor="gray.700" mb={4} />

        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} Marvincla - Tutti i diritti riservati
        </Text>
      </Container>
    </Box>
  );
}
