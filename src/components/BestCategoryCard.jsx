export default function BestCategoryCard({ children, href, className, img }) {
  return (
    <div className={"relative rounded-3xl overflow-hidden " + className}>
      <img src={img} className="h-full w-full object-cover brightness-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white text-center">
        <span className="text-4xl">{children}</span>
        <span className="block w-10 mx-auto my-6 border-t-2 border-solid border-white" />
        <a href={href} className="text-2xl hover:text-background">
          Ver más
        </a>
      </div>
    </div>
  );
}
