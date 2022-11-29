const express = require('express');
const app = express();

app.set("view engine", "ejs")


app.get("/", (req, res) => {
    const items = [
        { title: "D", message: "esenvolver e bem legal..."},
        { title: "E", message: "u também gosto de Desgign..."},
        { title: "M", message: "ais uma linha do teste..."},
        { title: "A", message: "ssim estamos quase no fim do foreach.."},
        { title: "I", message: "sso, falta pouco.."},
        { title: "S", message: "gora sim sextouuu.."},

    ];

    const subtitle = "Linguagem EJS e simples para montar página com Node e Html.";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
    
})

app.get("/sobre", (req, res) => {
    res.render("pages/about");
})


app.listen(8080);
console.log("Rodando...");