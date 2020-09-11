import PRODUCTS_JSON from "../Assets/products.json";

const INIT_PRODUCTS = [];

PRODUCTS_JSON.items.forEach((item) => {
  const newObj = {
    id: item.sys.id,
    title: item.fields.title,
    price: item.fields.price,
    img: item.fields.image.fields.file.url,
  };
  INIT_PRODUCTS.push(newObj);
});

export const INIT_STATE = {
  loading: false,
  cart: [],
  products: INIT_PRODUCTS,
};
