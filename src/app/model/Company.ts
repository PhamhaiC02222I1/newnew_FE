export class Company{
  public id:number;
  public companyName:string;
  public description:string;
  public establishmentDate: Date;
  public website:string;
  public image:string;


  constructor( companyName: string, description: string, establishmentDate: Date, website: string, image: string) {
    this.companyName = companyName;
    this.description = description;
    this.establishmentDate = establishmentDate;
    this.website = website;
    this.image = image;
  }
}
