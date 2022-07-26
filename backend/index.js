import express from "express";

const app= express();
const PORT = 3000;

app.get('/', (req,res) =>
    res.send(`Application is running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`Application server is running on ${PORT}`)
);

