var nombres = [];
var nombre = new Stack();
var apellido = new Stack();

nombre.push("Karla");
nombre.push("Pili");
nombre.push("Daffyta");
nombre.push("Gabi");
nombre.push("Pitt");

apellido.push("Nava");
apellido.push("Figueroa");
apellido.push("Pérez");
apellido.push("López");
apellido.push("Jimenez");


function Stack() {
  var stack = [];
  this.push = function(element){
    stack.push(element);
  };
  
  this.pop = function(){
    return stack.pop();
  };
  
  this.peek = function(){
    return stack[stack.length-1];
  };
  
  this.isEmpty = function(){
    return stack.length == 0;
  };
  
  this.size = function(){
    return stack.length;
  };
  
  this.clear = function(){
    stack = [];
  };
  
  this.print = function(){
    console.log(stack.toString());
  };
}

for (var i = 0; i < 5; i++) {
  nombres.push(nombre.pop() + " " + apellido.pop())
  console.log(nombres);
}