// Express уже установлен, можно пользоваться
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// Здесь нужно написать роут для отдачи статики
// Все пути считаются относительно переменной __dirname
// Подробнее про __dirname можно прочитать здесь https://nodejs.org/api/modules.html#modules_dirname
app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
  console.log(`Project start at ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});
