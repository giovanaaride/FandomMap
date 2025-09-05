//Buttons
import LoginBtn from "../../ui/LoginBtn";
import CadastroBtn from "../../ui/CadastroBtn";
import Title from "../../ui/Title";

import "./styles.modules.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="text" data-aos="fade-right" data-aos-delay="200">
        <Title />
        <p>Conectando fãs pelo mundo, e transformando o longe, em perto.</p>
      </div>

      <div className="input-login">
        <input placeholder="Email"></input>
        <input placeholder="Senha"></input>

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
