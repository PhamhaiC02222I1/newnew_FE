import {Category} from './Category';

export class Product{
  public id:number;
  public nameProduct:string;
  public description:string;
  public avatarProduct:string;
  public category:Category;


  constructor(nameProduct: string, description: string, avatarProduct: string, category: Category) {
    this.nameProduct = nameProduct;
    this.description = description;
    this.avatarProduct = avatarProduct;
    this.category = category;
  }
}
