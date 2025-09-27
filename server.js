const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const myArray = {
    firstName: "Happy",
    lastName: "Gilmore",
    sport: "golf",
};

// This is a headache.
app.get("/my-array", (req, res) => {
    let output = `<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB' crossorigin='anonymous'>`;
    output = `output <h1 class='bg-primary'>His name is ${myArray['firstName']} ${myArray['lastName']}.</h1>`
    output = output + `<p>His loves to play ${myArray['sport']} as much as he can.</p>`;
    console.log(output);
    res.send(output);
});


app.get("/", (req, res) => {
    console.log("Request for root path.");
    let output = "I have ";
    let sum = 1 + 1; // ice cream scoops

    sum = sum + 100;
    console.log(sum > 2 ? "Enjoy your Sundae, would you like a banana split?" : "Enjoy your cone!!");

    // console.log(output);
    res.send(output);
});

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});