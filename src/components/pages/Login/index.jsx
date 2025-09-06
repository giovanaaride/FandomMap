import { useState } from "react";
import LoginBtn from "../../ui/LoginBtn";
import CadastroBtn from "../../ui/CadastroBtn";
import Title from "../../ui/Title";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./styles.modules.scss";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Função para validar senha
  const validatePassword = (value) => {
    const hasLetter = /[A-Za-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (value.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
    } else if (!hasLetter || !hasNumber) {
      setError("A senha deve conter letras e números.");
    } else {
      setError(""); // tudo certo
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return (
    <section className="login">
      <div className="text" data-aos="fade-right" data-aos-delay="200">
        <Title />
        <p>Conectando fãs pelo mundo, e transformando o longe, em perto.</p>
      </div>

      <div className="input-login">
        <input placeholder="Email" type="email" required />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>

        {/* Mostrar mensagem de erro */}
        {error && <p className="error">{error}</p>}

        <div className="btn">
          <LoginBtn />
          <a href="#">Esqueci minha senha</a>
          <CadastroBtn />
        </div>
      </div>
    </section>
  );
};

export default Login;
