import { Type } from 'class-transformer';

export class ProductItem {
  _id: string;
  image: any;
  account_id: string;
  account_name: string;
  city_id: string;
  city_name: string;
  avatar: string;
  body: string;
  category_id: number;
  category_name: string;
  date: Date;
  phone: string;
  price: number;
  price_string: string;
  reviewer_image: string;
  reviewer_nickname: string;
  subject: string;
  type_name: string;
  ward_name: string;
}

export class Products {
  @Type(() => ProductItem)
  items: Array<ProductItem>;
}
