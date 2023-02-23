type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type TProductId = string;

type TProduct = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  secondImage: string;
  price: number;
};

type TAPIAVODetailResponse = TProduct;

type TAPIAvoResponse = {
  lenght: number;
  data: TProduct[];
  error?: string;
};
