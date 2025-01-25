import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.scss";

const NavBar: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <Link to="/" className={s.header__logo}>
          React-Gram
        </Link>
        <input
          type="text"
          className={s.header__search}
          placeholder="Pesquisar"
        />
        <nav className={s.header__nav}>
          <ul className={s.header__navList}>
            <Link to="/" className={s.header__navList__item}>
              Início
            </Link>

            <Link to="/auth/login" className={s.header__navList__item}>
              Login
            </Link>

            <Link to="/auth/register" className={s.header__navList__item}>
              Registro
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
