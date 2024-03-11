import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { FaCommentDots, FaPushed } from "react-icons/fa";
import { useUser } from "../state/UserContext";
import { AppConfig } from "../AppConfig";

const CFaUserAlt = chakra(FaCommentDots);
const CFaLock = chakra(FaPushed);

export const ComplaintForm = () => {
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");
  const [suggestions, setSuggestions] = useState([""]);
  const { user } = useUser();
  const toast = useToast();

  const handleChange = async (event: any) => {
    const { value } = event.target;
    setProduct(value);
    if (!value) {
      setSuggestions([""]);
      return;
    }
    try {
      const response = await fetch(
        `${AppConfig.baseUrl}/suggest_products?search_word=${value}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast({
          title: "Request failed",
          description: "Error in logging in user",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      const responseData = await response.json();
      setSuggestions(responseData[value.length - 1]);
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setProduct(suggestion);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${AppConfig.baseUrl}/create-complaint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          Description: description,
          UserId: user?.id,
          Status: "Pending",
          ProductName: product,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Complaint Created",
        description:
          "Your complaint is registered. We will resolve as soon as possible for us. Thanks!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#262424"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h4" color="teal.400">
          Register Complain
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="complaint description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    placeholder="Product name"
                    value={product}
                    onChange={handleChange}
                  />
                </InputGroup>

                <Box mt={2}>
                  {suggestions.map((suggestion, index) => (
                    <Text
                      key={index}
                      onClick={() => handleSelectSuggestion(suggestion)}
                      cursor="pointer"
                      _hover={{ backgroundColor: "gray.100" }}
                      p={1}
                      borderRadius="md"
                    >
                      {suggestion}
                    </Text>
                  ))}
                </Box>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
