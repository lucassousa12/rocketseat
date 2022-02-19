import express from "express";

const app = express();

/*
* GET - Buscar uma informação dentro do servidor
* POST - Inserir uma informação no servidor
* PUT - Alterar uma informação no servidor
* PATCH - Alterar uma informação específica
* DELETE - Deletar uma informação no servidor
*/

app.get("/courses", (Request, Response) => {
    return Response.json(["Curso 1", "Curso 2", "Curso 3"]);
})

app.post("/courses", (Request, Response) => {
    return  Response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (Request, Response) => {
    return  Response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (Request, Response) => {
    return  Response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (Request, Response) => {
    return  Response.json(["Curso 6", "Curso 7", "Curso 4"])
})

app.listen(3333);