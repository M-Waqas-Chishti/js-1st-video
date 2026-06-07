const accountId = 1234
let accountEmail = "waqas@gmail.com"
var accountPassword = "163"
let accountState;
/* plz not use var.
becouse of issue in block scope and funcutional scope. */
accountCity = "Lahore"

// accountId = 1 not allowed
accountEmail = "saqaw@gmail.com"
accountPassword = "143"
accountCity = " Sahiwal"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
