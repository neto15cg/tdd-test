const index = require("./index");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000; // Default port

// Configure o body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
const router = express.Router();
router.get("/", (req, res) => res.json({ message: "Funcionando!" }));

// GET /aplyDiscount
router.get("/aplyDiscount/:value/:discount", (req, res) => {
	const value = parseInt(req.params.value);
	const discount = parseInt(req.params.discount);
	res.json({ valueDiscounted: aplyDiscount(value, discount) });
});

app.use("/", router);
if (require.main === module) {
	// Init server
	app.listen(port);
	console.log("RUNNING IN PORT 3000");
}

module.exports = app;
