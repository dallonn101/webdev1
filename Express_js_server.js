const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send('Data received successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
