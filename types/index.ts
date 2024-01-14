import { IconType } from "react-icons";

export interface SessionUser {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  role: "USER" | "ADMIN";
}
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
export type DeleveryType = {
  icon: IconType;
  text: string;
  head: string;
};

export type quantityBtnType = {
  quantity: number;
  id: string;
  name: "plus" | "minus";
};
