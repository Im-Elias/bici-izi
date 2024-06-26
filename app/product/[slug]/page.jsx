import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddtoCartBtn";
import Link from "next/link";

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0] {
    _id,
    image,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name},
  }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const bike = await getData(params.slug);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px]  xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bike.image[0]).url()}
              alt={"bike imagen"}
              width={473}
              height={290}
              priority
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Volver a Principal
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn
                price_id={bike.price_id}
                name={bike.name}
                currency="USD"
                description={bike.description}
                images={bike.image}
                price={bike.price}
                text="Añadir al carro"
                btnStyles="btn btn-accent"
              />
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Envío gratis en compras sobre $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Devolución sin preguntas por 30 días</p>
              </div>
              <div className="flex gap-2">
                <Bike size={20} className="text-accent" />
                <p>Bicicleta parcialmente ensamblada</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Entregas en 3 días habiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
