import "./styles.modules.scss";

function Login() {
  return (
    <section className="login">
      <div className="text">
        <h1>FANDOM MAP</h1>
        <p>Conectando fãs pelo mundo, e transformando o longe, em perto.</p>
      </div>

      <div className="input-login">
        <input placeholder="Email"></input>
        <input placeholder="Senha"></input>
        
        <div className="btn">
            <button className="btn-entrar"
            >Entrar</button>
            <a href="#">Esqueci minha senha</a>
            <button className="btn-cadastrar"
            >Cadastre-se</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
