var nombres = [];

function Queue() {
  
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.print = print;

    function enqueue(element){
      this.dataStore.push(element);
    }

    function dequeue(){
       return this.dataStore.shift();
    }

   function print(element){
      return console.log(this.dataStore);
    }

  }

var nombre = new Queue();
  nombre.enqueue("Karla");
  nombre.enqueue("Pili");
  nombre.enqueue("Daffyta");
  nombre.enqueue("Montse");
  nombre.enqueue("Pitt");

var apellido = new Queue();
  nombre.enqueue("Nava");
  nombre.enqueue("Figueroa");
  nombre.enqueue("Muciño");
  nombre.enqueue("Jimenez");
  nombre.enqueue("López");

for (var i = 0; i < 5; i++) {
    nombres.push(nombre.enqueue() + " " + apellido.enqueue());
 
    console.log(nombres);
} 
