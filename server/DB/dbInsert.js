async function insertData(holding, price, quantity) {
	const connectData = require("./dbConnect")
	let data = await connectData()               // DB - server connection
	let transaction = await price * quantity
	let balance = await data.findOne()
	let netBalance = await balance.balance - transaction
	let result = await data.updateOne(            // DB update command
		{ email: "garvit1189@gmail.com" },
		{ $push: { holding: holding, price: price, quantity: quantity, transaction: transaction} }
	)

	result = await data.updateOne(                // DB update command
		{ email: "garvit1189@gmail.com" },
		{ $set: { balance: netBalance} }
	)
}

module.exports = insertData