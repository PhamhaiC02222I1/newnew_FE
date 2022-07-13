export class Tour{
  public id:number;
  public name:string;
  public price:number;
  public desciption:string;


  constructor( name: string, price: number, desciption: string) {
    this.name = name;
    this.price = price;
    this.desciption = desciption;
  }
}
