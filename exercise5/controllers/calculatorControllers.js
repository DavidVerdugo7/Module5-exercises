//add
const add = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

//subtract
const subtract = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

//multiply
const multiply = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

//Divide
const divide = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 / num2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
};

module.exports = { add, subtract, multiply, divide };
