const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom routes (optional)
server.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const db = router.db;
  db.get('accounts').push({ email, password }).write();
  res.json({ success: true, message: 'Account successfully registered!' });
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
