import type React from "react";
import s from "./index.module.scss";

const Footer: React.FC = () => {
  const links = [
    "Sobre",
    "Ajuda",
    "Imprensa",
    "API",
    "Carreiras",
    "Privacidade",
    "Termos",
    "Localizações",
    "Contas mais relevantes",
    "Hashtags",
    "Idioma",
  ];

  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <nav className={s.footer__container__nav}>
          {links.map((link, index) => (
            <a key={index} href="#" className={s.footer__container__nav__item}>
              {link}
            </a>
          ))}
        </nav>
        <div className={s.footer__container__copyright}>
          © {new Date().getFullYear()} REACT-GRAM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
