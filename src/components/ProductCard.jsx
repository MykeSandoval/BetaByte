export default function ProductCard({ img, children, price, lastPrice }) {
  const formatMoney = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="p-6 bg-white rounded-3xl flex flex-col group">
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
      <div className="flex gap-4">
        <span className="h-full aspect-square border-2 border-primary rounded-full text-primary hover:text-white hover:bg-primary grid place-content-center">
          <i className="fa-solid fa-basket-shopping text-2xl w-auto h-auto" />
        </span>
        <div className="grow text-right flex flex-col">
          <span className="text-2xl font-semibold ">{formatMoney(price)}</span>
          <span className="text-xl line-through text-black/50">
            {formatMoney(lastPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
