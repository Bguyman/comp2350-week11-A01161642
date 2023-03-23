const MongoClient = require("mongodb").MongoClient;

const is_qoddi = process.env.IS_QODDI || false;

const qoddiURI = "mongodb+srv://theMongoAdmin:accidentalLogin@cluster0.4ulcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const localURI = "mongodb://localhost/?authSource=admin&retryWrites=true&w=majority"

if (is_qoddi) {
	let datadase = new MongoClient (qoddiURI, {
		useNewUrlParser: true, useUnifiedTopology: true
	});
} else {
	let database = new MongoClient (localURI, {
		useNewUrlParsel: true, useUnifiedTopology: true
	});
}