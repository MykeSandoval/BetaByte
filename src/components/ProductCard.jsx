import { useCart } from "../context/cart";

export default function ProductCard({ id,  img,  price,  lastPrice, children }) {
  const addToCart = useCart((state)=>state.addToCart)

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "USD",
    }).format(value);

  const discountPercentage =
    lastPrice && lastPrice !== price
      ? ((lastPrice - price) / lastPrice) * 100
      : null;

  return (
    <div className="p-6 bg-white rounded-3xl flex flex-col group relative">
      <img src={img} className="" />
      <div className="flex justify-center text-primary">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-regular fa-star-half-stroke" />
        <i className="fa-regular fa-star" />
      </div>
      <span className="text-center text-2xl my-3 justify-self-center group-hover:text-primary grow">
        {children}
      </span>
      {discountPercentage && (
        <span
          className="discount font-semibold text-white bg-primary absolute top-3 left-3 px-2 py-1 rounded-lg"
          style={{ fontSize: "0.75rem" }}
        >
          -{discountPercentage.toFixed(0)}%
        </span>
      )}
      <div className="flex gap-4">
        <button className="h-full cursor-pointer aspect-square border-2 border-primary rounded-full text-primary hover:text-white hover:bg-primary grid place-content-center" 
        onClick={() => addToCart({id,  img,  price,  lastPrice, title: children})}>
          <i className="fa-solid cursor-pointer fa-basket-shopping text-2xl w-auto h-auto" />
        </button>
        <div className="grow text-right flex flex-col">
          <span className="text-2xl font-semibold ">{formatMoney(price)}</span>
          <span className="text-xl line-through text-black/50">
            {formatMoney(lastPrice)}
          </span>
        </div>
      </div>
      <div className="product-icons opacity-0 group-hover:opacity-100 absolute top-20 right-3 transform -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-300">
        <span className="border-2 border-primary rounded-full text-primary p-2  cursor-pointer hover:text-white hover:bg-primary grid place-content-center">
          <i className="fa-solid fa-eye"></i>
        </span>
        <span className="border-2 border-primary rounded-full text-primary p-2  cursor-pointer hover:text-white hover:bg-primary grid place-content-center">
          <i className="fa-regular fa-heart"></i>
        </span>
        <span className="border-2 border-primary rounded-full text-primary p-2  cursor-pointer hover:text-white hover:bg-primary grid place-content-center">
          <i className="fa-solid fa-code-compare"></i>
        </span>
      </div>
    </div>
  );
}
