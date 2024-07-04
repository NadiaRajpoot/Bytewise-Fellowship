import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <div className="border-2 border-gray h-68 rounded-lg">
      <div className="">
        <img className="object-cover h-48 w-96" src={item.image_link} alt="" />
      </div>
      <div className=" m-4 ">
        <span className="font-semibold text-sm">
          {item.name.substring(0, 26)}
        </span>

        <div className="flex m-1">
          <h2 className="font-semibold text-sm my-2 content-center">
            $ {item.price}
          </h2>
          <div className="w-[0.10rem] h-10 bg-gray-300 m-2"></div>

          <button>
            <Link
              to={"products/" + item.id}
              className="rounded-md border-2 border-pink-400 p-2 text-sm relative "
            >
              buy now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
