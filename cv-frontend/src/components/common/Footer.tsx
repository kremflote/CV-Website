import type { FC } from "react";
import { footerStyles } from "../../styles/styles";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.signature}>2026 mariuskristensen.no.</div>
    </footer>
  );
};

export default Footer;
