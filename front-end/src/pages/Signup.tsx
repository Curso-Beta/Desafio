import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";
import { useMutation } from "react-query";
import { api } from "../services/api";
import { queryClient } from "./../services/queryClient";
import { Header } from "../components/Header";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

const SignupFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Deve ter mais de 6 caracteres"),
});

export function Signup() {
  const mutation = useMutation(
    async (candidato: SignupFormData) => {
      const response = await api.post("users", {
        name: candidato.name,
        email: candidato.email,
        password: candidato.password,
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(SignupFormSchema),
  });

  const handleCreateCandidato: SubmitHandler<SignupFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await mutation.mutateAsync(values);
  };

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        mx="auto"
        px="6"
        maxWidth="35rem"
        margin="2rem auto"
      >
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateCandidato)}
        >
          <Heading size="lg" fontWeight="normal">
            Cadastre-se
          </Heading>
          <Text color="gray.300">É rápido e fácil.</Text>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={8}>
            <Input
              {...register("name")}
              error={errors.name}
              label="Nome Completo"
              type="txt"
            />
            <Input
              {...register("email")}
              error={errors.email}
              label="E-mail"
              type="email"
            />
            <Input
              {...register("password")}
              error={errors.password}
              label="Senha"
              type="password"
            />
            <Button
              type="submit"
              colorScheme="green"
              size={"lg"}
              isLoading={formState.isSubmitting}
            >
              Cadastre-se
            </Button>
          </VStack>
          <Divider my="6" borderColor="gray.700" />
          <Flex align="center" justify="center" mt="4">
            <Text>
              Já tem uma conta?
              <ChakraLink href="login" ml="2" fontWeight="bold" color="green">
                Faça login
              </ChakraLink>
            </Text>
          </Flex>

          {mutation.isSuccess && (
            <Alert status="success" color="gray.900" borderRadius={8} mt="8">
              <AlertIcon />
              Usuário cadastrado com sucesso!
            </Alert>
          )}

          {mutation.isError && (
            <Alert status="error" color="gray.900" borderRadius={8} mt="8">
              <AlertIcon />
              {mutation.error.response.data.message}
            </Alert>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
