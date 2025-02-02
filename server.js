import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors'

const prisma = new PrismaClient();  // Instanciando o PrismaClient
const app = express();
app.use(express.json());
app.use(cors())

app.post("/usuarios", async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }

    })


    const user = req.body;
    console.log(user);
    res.send('BOAAA MAN, FUNCIONOU!');
    res.status(201)
});
app.put("/usuarios/:id", async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id

        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }

    })



    res.status(201).json(req.body)
});

app.get('/usuarios', async (req, res) => {

    let users =[]

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else{
        users = await prisma.user.findMany()
    }
    

    res.status(200).json(users);
});


app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        },

    })

    res.status(200).json({message: "MANE SE DELETOU O CARA, SE TA MALUKO!!:O"})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
