// NOTE :: Immediately Invoked function Expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();
// We use IIFE to remove pollution(variable & declaration) from global scopes..
// Having problem when 
// ( function aurcode(){
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('vijay')

( () => {
    console.log(`DB CONNECTED TWO ${name}`);
})('vijay')
