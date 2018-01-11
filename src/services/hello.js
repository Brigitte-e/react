const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa'];

const sayHello = function() {
    return hellos[Math.floor((Math.random()*hellos.length))];
};

const test = function() {
    console.log('test');
};

export { sayHello, test };
