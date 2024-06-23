import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-white text-center text-lg">
      {/* copyright */}
      Copyright &copy; 2024{" "}
      <Link className="capitalize" href="https://github.com/Im-Elias">
        Josué Gallardo.
      </Link>{" "}
      Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
