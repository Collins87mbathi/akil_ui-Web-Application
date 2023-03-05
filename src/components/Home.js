import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
// import { fetchProducts } from "../../actions/product.action";
import Product from "../components/Product";
import { fetchAllProducts } from "../Redux/reducers/product.reducer";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productReducer
  );

console.log(products);
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
    dispatch(fetchAllProducts());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  if(error!==null){
    return <p className="text-red-500 text-2xl">An arror occured</p>
  }

  if(loading==='pending'){

    return <p className="text-green-500 text-3xl">loading...</p>
  }

  if(products.length===0){
    return <p className="text-red-500 text-2xl">
      No products found
    </p>

  }

  return (
    <div className="m-auto px-4 py-10 max-w-4xl xl:max-w-6xl">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-4 xl:grid-cols-5">
      {products?.items.map((prod,index) => 
         <Product key={index} prod={prod} />
      )}
    </div>
    </div>
  );
};

export default Products;
