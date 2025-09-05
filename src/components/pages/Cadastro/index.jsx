//Buttons
import LoginBtn from "../../ui/LoginBtn";
import { Link } from "react-router-dom";
import Title from "../../ui/Title";
import "./styles.modules.scss";

const Cadastro = () => {
  // Ano atual e range de anos (100 anos para trás)
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100;
  const years = [];

  // CORREÇÃO: Preenche anos do MAIS RECENTE para o MAIS ANTIGO
  for (let ano = currentYear; ano >= startYear; ano--) {
    years.push(ano);
  }

  return (
    <main className="cadastro">
      <header className="cadastro-header">
        <Title />
      </header>

      {/* FORM correto - coloquei TODO o conteúdo dentro do form */}
      <form className="cadastro-form">
        <h2>CRIAR UMA NOVA CONTA</h2>

        {/* LINHA COM NOME E SOBRENOME */}
        <div className="input-group-name">
          <input id="nome" type="text" placeholder="Nome" required />
          <input id="sobrenome" type="text" placeholder="Sobrenome" required />
        </div>

        {/* DATA DE NASCIMENTO */}
        <div className="input-group-date">
          <p>Data de nascimento</p>
          <div className="input-birthday">
            {/* DIA */}
            <div>
              <label htmlFor="day">Dia: </label>
              <input id="day" type="number" min="1" max="31" placeholder="DD" />
            </div>

            {/* MÊS */}
            <div>
              <label htmlFor="mes">Mês: </label>
              <input id="mes" type="number" min="1" max="12" placeholder="MM" />
            </div>

            {/* ANO */}
            <div>
              <label htmlFor="year">Ano: </label>
              <select id="year">
                <option value="">AAAA</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* GÊNERO */}
        <div className="input-group-gender">
          <p>Gênero: </p>
          <div className="gender">
            <label className="options-gender">
              <input type="radio" name="gender" value="feminino" />
              Feminino
            </label>
            <label className="options-gender">
              <input type="radio" name="gender" value="masculino" />
              Masculino
            </label>
            <label className="options-gender">
              <input type="radio" name="gender" value="neutro" />
              Neutro
            </label>
          </div>
        </div>

        {/* EMAIL */}
        <div className="input-cadastro">
          <p htmlFor="email">Email: </p>
          <input id="email" type="email" placeholder="seu@email.com" required />
        </div>

        {/* SENHA */}
        <div className="input-cadastro">
          <p htmlFor="senha">Senha: </p>
          <input id="senha" type="password" placeholder="Sua senha" required />
        </div>

        {/* BOTÃO E LINK */}
        <div className="btn-form">
          <LoginBtn />
          <a>
            Já tem uma conta? Faça login
          </a>
        </div>

      </form>
    </main>
  );
};

export default Cadastro;
