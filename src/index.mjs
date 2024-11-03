import express from 'express';

const app = express();

app.get("/api/users", (req,res) => {
    res.send("hello users")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

