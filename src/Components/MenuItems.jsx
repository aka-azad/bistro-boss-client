import { useEffect, useState } from "react";
import MenuItemCard from "../Pages/Shared/MenuItemCard";
import SectionHeading from "./SectionHeading";
import axios from "axios";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => setMenuItems(res.data));
  }, []);
  return (
    <div className="mb-4">
      <SectionHeading
        text={{ message: "Check It Out", heading: "From Our Menu" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </div>
      <div>
        <p className="hover:cursor-pointer hover:bg-slate-200 uppercase mt-12 text-xl py-5 px-8 font-semibold mx-auto  border-b-2 border-black rounded-xl w-fit">
          View Full Menu
        </p>
      </div>
    </div>
  );
};

export default MenuItems;
