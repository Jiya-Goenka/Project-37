class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      
    }
    
  
    display(){
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      
  
    }
  }