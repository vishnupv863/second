import express from 'express';

const app = express();

const mockUsers = [
    { id: 1, username: 'vishnu', displayName: "vishnu" },
    { id: 2, username: 'neena', displayName: "neena" },
    { id: 3, username: 'gokul', displayName: "gokul" },
    { id: 4, username: 'shaji', displayName: "shaji" },
    { id: 5, username: 'sreeja', displayName: "srejja" },
]

app.get("/", (req, res) => {
    res.status(201).send({ msg: "hello world" });
});

app.get("/api/users", (req, res) => {
    res.send(mockUsers);
});

app.get("/api/products", (req, res) => {
    res.send([
        { id: 1, name: "chichek", price: 200 },
        { id: 2, name: "beef", price: 300 },
        { id: 3, name: "mutton", price: 350 },
        { id: 4, name: "fish", price: 420 },
        { id: 5, name: "pork", price: 540 }
    ]);
});

app.get("/api/users/:id", (req, res) => {
    console.log(req.params)
    const parseId = parseInt(req.params.id);
    if (isNaN(parseId)) return res.status(400).send({ msg: "bad request" });
    const findUser = mockUsers.find((user) => user.id === parseId );
    if (!findUser) return res.status(401).send({ msg: "user not found" });
    res.status(201).send(findUser)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

