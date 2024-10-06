import { FaMagnifyingGlass } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <nav className="flex w-full px-[10%] items-center h-16 justify-between ">
      <div className="space-x-12 flex gap-14">
        <div className="font-extrabold text-2xl  space-x-10">Hekto</div>
        <div className="flex gap-8">
          <div>Home</div>
          <div>Pages</div>
          <div>Products</div>
          <div>Blog</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="flex ">
        <input className="border-gray-200  border-2 w-48 h-10" />
        <div className="bg-e1pink w-10 flex justify-center">
          <FaMagnifyingGlass size={"25"} className="my-auto" color="white" />
        </div>
      </div>
    </nav>
  );
};
