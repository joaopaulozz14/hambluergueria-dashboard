import * as Styled from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/logo_patterns/logo.png";
import { toast } from "react-hot-toast";
import { api } from "../../service";
import { useAuth } from "../../contexts/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";

interface LoginData {
  email: string;
  password: string;
}
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    {
      /*O axios retorna o res como AxiosError*/
    }
    api
      .post(`/auth/login`, data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválidos");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Burguer Fresh</h1>
          <img alt="logo" src={logo} />
        </Styled.LoginLogoContainer>
        <StyledInput {...register("email")} placeholder="Email" />
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Senha"
        />
        <ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </ErrorMessage>
        <Button text="Entrar" size="large" type="submit" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
