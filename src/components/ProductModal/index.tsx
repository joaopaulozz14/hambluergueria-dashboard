import * as Styled from "./styles";
import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { mockedCategories } from "../../mocks";
import { api } from "../../service";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/products";
import { Product } from "../../types";

interface ProductModalProps {
  handleOpenModal: () => void;
  product?: Product;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

interface NewProductData {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  categoryId?: string;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("Nome do produto obrigatório"),

  description: yup.string().required("Descrição do produto obrigatória"),

  price: yup.number().required("Preço do produto obrigatório"),

  image: yup
    .string()
    .url("Formato de URL inválido")
    .required("Imagem do produto obrigatória"),
});

const updateProductSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  price: yup.number(),

  image: yup.string().url("Formato de URL inválido"),
});

const ProductModal = ({ handleOpenModal, product, setProduct }: ProductModalProps) => {
  {
    /*O as significa que o {} será substituído pelo Category*/
  }
  {
    /*const [category, setCategory] = useState<Category>({} as Category)*/
  }
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>(
    product ? product.categoryId : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api
      .post("/products", data, headers)
      .then((res) => {
        toast.success("Produto registrado com sucesso");
        handleOpenModal();
        handleGetProducts();
        setProduct(undefined);
      })
      .catch(() => toast.error("Selecione um produto"));
  };

  const handleUpdateProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      toast.success("Produto atualizado com sucesso");
      handleOpenModal();
      handleGetProducts();
      setProduct(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Editar Produto" : "Adicionar Produto"}</h2>

        <StyledInput
          placeholder="Nome do produto"
          defaultValue={product ? product.name : ""}
          {...register("name")}
        />
        <StyledInput
          defaultValue={product ? product.description : ""}
          placeholder="Descrição do produto"
          {...register("description")}
        />
        <StyledInput
          placeholder="Preço do produto"
          defaultValue={product ? product.price : ""}
          step="0.01"
          type="number"
          {...register("price")}
        />
        <StyledInput
          defaultValue={product ? product.image : ""}
          placeholder="URL da imagem do produto"
          {...register("image")}
        />
        <Styled.Selected
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option disabled>Selecione a categoria</option>
          {mockedCategories.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </Styled.Selected>
        <ErrorMessage>
          {errors.name?.message ||
            errors.price?.message ||
            errors.image?.message ||
            errors.description?.message}
        </ErrorMessage>
        <div>
          <Button
            size="small"
            text="Cancelar"
            variant="cancel"
            onClick={() => {
              setProduct(undefined);
              handleOpenModal();
            }}
          />
          <Button size="small" text="Enviar" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};
export default ProductModal;
