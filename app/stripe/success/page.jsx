import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="py-72 ">
      <div className="container mx-auto">
        <h3 className=" text-center">¡Tu pago fue realizado con éxito!</h3>
        <h3 className=" text-center mb-4">¡Gracias por tu compra!</h3>
        <Link href="/">
          <button className="btn btn-primary mx-auto">Volver al Inicio</button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
