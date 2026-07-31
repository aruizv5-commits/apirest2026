module.exports = app => {
    const provedor = require("../cotrollers/provedor.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", provedor.create);
    // Retrieve all Client
    router.get("/", provedor.findAll);
    // Retrieve all published Client
    router.get("/status", provedor.findAllStatus);
    // Retrieve a single Client with id
    router.get("/:id", provedor.findOne);
    // Update a Client with id
    router.put("/update/:id", provedor.update);
    // Delete a Client with id
    router.delete("/delete/:id", provedor.delete);
    // Delete all Cliente
    router.delete("/delete/", provedor.deleteAll);
    // Podemos utilizar como una ocpion app.use("EndPoint",router" para simplicar el URI
    // Ej.  http://localhost:Puerto/api/cliente/
    app.use("/api/provedor", router);
};