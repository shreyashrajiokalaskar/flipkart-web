export interface IUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IProduct {
  images: string[];
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: {
    slug: string;
  };
  thumbnail: string;
  __v: number;
}

export interface ICategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  slug: string;
  name: string;
}

export interface ISuccessResponse<T> {
  result: T;
  status: number;
  count: number;
}

export interface ICity {
  id: string;
  pincode: number;
  name: string;
  district: string;
  state: string;
}
