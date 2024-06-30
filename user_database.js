const userDatabase = [];

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    userDatabase.push({ name, email });
    res.send('Data received successfully!');
});
