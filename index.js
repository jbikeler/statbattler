import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


// Async Functions
async function client_init(){
    const dbase = new pg.Client({
        user:"postgres",    //do not change - this is the default pgadmin4 username
        password:"",                // insert password here
        database:"database_name",   // insert desired database here
        host:"localhost",   //do not change - this is where you're running the server if not online
        port:5432,          //do not change - this is the default pgadmin4 port
    });
    return dbase;
}

//Functions




// ------ Backend logic ------ \\

// GET homepage
app.get("/", async (req, res) => {
    res.render("index.ejs");
});


// listener - allows to run on localhost
app.listen(port, () => {
    console.log(`LISTENING ON PORT: ${port}`);
});