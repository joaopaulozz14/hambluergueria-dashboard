import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { Category } from "../../types";
  import { api } from "../../service";
  import { useAuth } from "../auth";
  
  interface CategoryProviderData {
    categories: Category[];
    handleGetCategories: () => void;
  }
  interface CategoryProviderProps {
    children: ReactNode;
  }
  const CategoryContext = createContext<CategoryProviderData>(
    {} as CategoryProviderData
  );
  
  export const CategoriesProvider = ({ children }: CategoryProviderProps) => {
    const { logged } = useAuth();
  
    const [categories, setCategory] = useState<Category[]>([]);
  
    const handleGetCategories = () => {
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      api.get("/categories", headers).then((res) => {
        setCategory(res.data);
      });
    };
  
    useEffect(() => {
      if (logged) handleGetCategories();
    }, [logged]);
  
    return (
      <CategoryContext.Provider value={{ categories, handleGetCategories }}>
        {children}
      </CategoryContext.Provider>
    );
  };
  
  export const useCategories = () => useContext(CategoryContext);
  