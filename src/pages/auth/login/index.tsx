import type React from "react";
import { useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login attempt", { email, password });
  };

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <h1 className={styles.login__form__logo}>React-Gram</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.login__form__input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.login__form__input}
          required
        />
        <button type="submit" className={styles.login__form__button}>
          Entrar
        </button>
      </form>
      <div className={styles.login__signUp}>
        <p>
          Não tem uma conta?{" "}
          <Link to="/auth/register" className={styles.login__signUp__link}>
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
