interface MyComponentProps {
  name: string;
  price: number;
  img: string;
}
export const ProductCard: React.FC<MyComponentProps> = ({
  name,
  img,
  price,
}) => {
  return (
    <div className="flex flex-col gap-4 h-fit ">
      <div className="w-[225px] h-[225px] px-2 py-2">
        <img className="w-full h-full" src={img} />
      </div>
      <div className="flex flex-col gap-10 items-center h-[200px] w-[400px] bg-green-500 border">
        <div className="text-[#FB2E86]">{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};
