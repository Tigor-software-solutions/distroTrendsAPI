class  Distro{
    constructor(Id,Code,Name,Description,ImageURL, HomePage){
      this.Id = Id;
      this.Code = Code;
      this.Name = Name;
      this.Description = Description;
      this.ImageURL = ImageURL;
      this.HomePage = HomePage;
    }
  }
  
  module.exports = Distro;