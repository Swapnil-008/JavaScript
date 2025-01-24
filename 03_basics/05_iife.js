// Immediately invoked function expressions (IIFE)

// this function is IIF because of not affecting from a pollution of global scope
(function chai()
{
    console.log(`DB CONNECTED`)
})();

// but as this function do not have idea where it have to stop that's why we have to add semicolan after ending of a function

(function aurCode()
{
    console.log(`DB CONNECTED TWO`)
})();

function chaiAurCode()
{
    console.log(`DB CONNECTED THREE`)
}
chaiAurCode();
// now after every function we have to use semicolon
( (name) => {
    console.log(`DB CONNECTED BY ${name}`)
})("SWAPNIL");