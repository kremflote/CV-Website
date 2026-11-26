import type { FC } from "react";
import { Container } from "./Container";
import { footerStyles } from "../../styles/styles";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container className={footerStyles.inner}>
        <span>{new Date().getFullYear()} mariuskristensen.no</span>
      </Container>
    </footer>
  );
};

export default Footer;
