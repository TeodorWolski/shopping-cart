import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import Navbar from "../../components/organisms/Navbar/Navbar";
import { Wrapper } from "./ItemPage.styles";
import { useSelector } from "react-redux";
import { DUMMY_PRODUCTS } from "../../assets/data";
import { RootState } from "../../store/index";

const ItemPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <>
      <Navbar />
      <div
        style={{
          transform: "translateY(10%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Wrapper>
          {DUMMY_PRODUCTS.map((product) => (
            <div key={product.id}>
              <ItemCard item={product} />
            </div>
          ))}
        </Wrapper>
      </div>
    </>
  );
};

export default ItemPage;
