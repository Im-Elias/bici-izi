import { client } from "@/app/lib/sanity";
import BikeCategories from "@/components/BikeCategories";

const getData = async () => {
  const query = `*[_type == 'product'] {
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

const OurBikes = async () => {
  const bikes = await getData();

  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  );
};

export default OurBikes;
