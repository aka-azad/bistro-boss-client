import PropTypes from "prop-types";

const MenuItemCard = ({ menuItem }) => {
  return (
    <div className="flex gap-3">
      <figure className="h-[100px] min-w-[110px] bg-slate-700 overflow-hidden rounded-b-[50px] rounded-r-[50px]">
        <img
          className="h-full w-full object-cover"
          src={menuItem?.image}
          alt={menuItem?.name}
        />
      </figure>
      <div className="flex-grow">
        <h5 className="uppercase font-thin font-serif text-xl">
          {menuItem?.name}------------------
        </h5>
        <p className="text-[#737373] ">{menuItem?.recipe}</p>
      </div>
      <div>
        <p className="text-xl text-[#BB8506]">${menuItem?.price}</p>
      </div>
    </div>
  );
};

MenuItemCard.propTypes = {
  menuItem: PropTypes.object.isRequired,
};
export default MenuItemCard;
