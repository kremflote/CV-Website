import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { buttonStyles, notFoundStyles } from "../styles/styles";

const NotFoundPage = () => {
  return (
    <Container>
      <section className={notFoundStyles.section} aria-labelledby="not-found-title">
        <p className={notFoundStyles.label}>Feil 404</p>
        <h1 id="not-found-title" className={notFoundStyles.title}>
          Siden finnes ikke
        </h1>
        <p className={notFoundStyles.body}>
          Adressen kan være skrevet feil, eller siden kan ha blitt flyttet.
        </p>
        <div className={notFoundStyles.actions}>
          <Link to="/" className={`${buttonStyles.base} ${buttonStyles.primary}`}>
            Til forsiden
          </Link>
          <Link
            to="/portfolio"
            className={`${buttonStyles.base} ${buttonStyles.outline}`}
          >
            Se prosjekter
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default NotFoundPage;
