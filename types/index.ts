export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: string;
  role: "ADMIN" | "USER";
};
export type ServiceCardType = {
  photo: string;
  headline: string;
  tittle: string;
};
export type ProductType = {
  product_url: string;
  tittle: string;
  category: string;
  price: number;
};
