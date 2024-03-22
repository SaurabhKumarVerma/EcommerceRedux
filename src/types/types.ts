export interface IUser {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthUser {
  email: string;
  password: string;
}

export enum ECustomerType {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export interface ISignUpUser {
  email: string;
  name: string;
  password: string;
  role?: ECustomerType;
  avatar: string;
}

export interface IErrorMessage {
  errorMessage?: string;
}

export interface ILoadingState extends IErrorMessage {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export type TRating = {
  count: number;
  rate: number;
};

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string[];
  category: string;
  rating: TRating;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
