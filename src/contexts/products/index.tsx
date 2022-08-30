import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../../types";
import { api } from "../../service";
import { useAuth } from "../auth";

interface ProductsProviderData {
  products: Product[];
  handleGetProducts: () => void;
}
interface ProductsProviderProps {
  children: ReactNode;
}
const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { logged } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/products", headers).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetProducts();
  }, [logged]);

  return (
    <ProductsContext.Provider value={{ products, handleGetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
