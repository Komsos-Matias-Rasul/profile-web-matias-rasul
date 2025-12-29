import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Link from "next/link";
import Image from "next/image";

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');

export const GaleriItem = ({ item }) => {
  const firstImage = item.images?.[0]?.imageUrl || "/assets/default-image.png";
  return (
    <>
      <Card
        shadow="sm"
        key={item.id}
        className="border rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <CardBody className="overflow-visible p-0">
          <Link href={`/galeri/${slugify(item.title)}`} className="block w-full h-48 relative">
            <Image
              alt={item.title}
              src={firstImage}
              fill
              className="object-cover rounded-t-xl hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </CardBody>
        <CardFooter className="flex-col items-start text-left p-4 gap-2">
          <Link href={`/galeri/${slugify(item.title)}`}>
            <b className="text-md md:text-lg lg:text-xl font-bold text-blue-950 hover:underline">
              {item.title}
            </b>  
          </Link>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            {item.formattedDate}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

GaleriItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired,
    formattedDate: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired
      })
    ).isRequired 
  }).isRequired
};
