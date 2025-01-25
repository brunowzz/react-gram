import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { email, fullName, username, password };
    console.log(user);
  };

  return (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={handleSubmit}>
        <h1 className={styles.register__form__logo}>React-Gram</h1>
        <h2 className={styles.register__form__subtitle}>
          Cadastre-se para ver fotos e vídeos dos seus amigos.
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.register__form__input}
          required
        />
        <input
          type="text"
          placeholder="Nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.register__form__input}
          required
        />
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.register__form__input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.register__form__input}
          required
        />
        <button type="submit" className={styles.register__form__button}>
          Cadastre-se
        </button>
      </form>
      <div className={styles.register__login}>
        <p>
          Tem uma conta?{" "}
          <Link to="/auth/login" className={styles.register__login__link}>
            Conecte-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
