const ecc = require('eosjs-ecc');

const private_key = "5J4LrdVYATcbgPQHdZbfwna1u7KUELawXLYh5JVbUf1Jzni3wWF";
const public_key = ecc.PublicKey.fromString("EOS6jx5kMeRasajrZN5PsuE6MXQRyWpDTeE7maZ65Kahw8NAMeyn7");
const message = "testuser1234";

async function main(){

	var sig = ecc.sign(message, private_key);

	console.log("Signature:", sig);

}

main();