const app = require('./app');
const { PORT } = require('./utils/config');

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
