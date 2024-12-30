import Banner from "../../Components/Banner";
import CategorySwiper from "../../Components/CategorySwiper";
import MenuItems from "../../Components/MenuItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
       <CategorySwiper />
      <MenuItems /> 
      </div>
      
    </div>
  );
};

export default Home;
