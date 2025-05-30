const accountId =144553
let accountEmail="yoyo@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed
accountEmail="riri.com"
accountPassword="4323"
accountCity="Bengalore"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
becoz of issue in block scopr and functional scope
*/
