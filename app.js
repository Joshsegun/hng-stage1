const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//Prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//Perfect
const isPerfect = (num) => {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;

      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num && num !== 1;
};

//Armstrong
const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === num;
};

//Digit sum
const digitSum = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);

const getClassifyNumber = async (req, res) => {
  const { number } = req.query;

  // const number = "hello";

  if (!number || isNaN(number) || !Number.isInteger(Number(number)))
    return res.status(400).json({
      number,
      error: true,
    });

  const num = parseInt(number);

  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const even = num % 2 == 0;
  const digitsum = digitSum(num);

  let properties = [];
  if (armstrong) {
    properties.push("armstrong");
  }
  properties.push(even ? "even" : "odd");

  let funFact = "No fact found";
  try {
    const res = await fetch(`http://numbersapi.com/${num}/math`);
    if (res.ok) {
      funFact = await res.text();
    }
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
  }

  res.status(200).json({
    num,
    is_prime: prime,
    is_perfect: perfect,
    properties,
    digit_sum: digitsum,
    fun_fact: funFact,
  });
};

app.get("/api/classify-number", getClassifyNumber);

module.exports = app;
