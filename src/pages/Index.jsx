import { Container, Text, VStack, Box, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaMapMarkerAlt, FaUsers, FaTruck } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to Globus
          </Text>
          <Text fontSize="lg" color="gray.500">
            Your Peer-to-Peer Courier Service
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwc2VydmljZXxlbnwwfHx8fDE3MTY5MzMzMTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Courier Service" borderRadius="md" />
        <HStack spacing={4}>
          <IconButton aria-label="Fast Delivery" icon={<FaRocket />} size="lg" />
          <IconButton aria-label="Global Reach" icon={<FaMapMarkerAlt />} size="lg" />
          <IconButton aria-label="Community Driven" icon={<FaUsers />} size="lg" />
          <IconButton aria-label="Reliable Service" icon={<FaTruck />} size="lg" />
        </HStack>
        <Box textAlign="center">
          <Text fontSize="xl">Fast, Reliable, and Community Driven</Text>
          <Text fontSize="md" color="gray.500">
            Join us and experience the future of courier services.
          </Text>
        </Box>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
