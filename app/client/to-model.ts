export class LedModel{
  constructor(
    public name:string = "",
    public pin:string = "",
    public status:string = "",
    public color:string = ""
  ){}

    on():void{
    this.status = "On";
    this.color = "green";
  }

  off():void{
    this.status = "Off"  ;
    this.color = "red";
  }
}
