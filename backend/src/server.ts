import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello GoBarber'})
})

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}` );
  
});