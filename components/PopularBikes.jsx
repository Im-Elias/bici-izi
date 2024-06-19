import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularBikesCarousel from "./PopularBikesCarousel";

//get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
  _id,
    name,
    description,
    image,
    price_id,
    price,
    "slug": slug.current,
    "categories": categories[]-> {
      name
    }
  }`;
  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Biciletas Mas Populares</h2>
        <p className=" text-center mb-[30px]">
          Las Marcas Premiums en un solo destino.
        </p>
        <PopularBikesCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button className="btn btn-accent mx-auto">Ver Todas</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
