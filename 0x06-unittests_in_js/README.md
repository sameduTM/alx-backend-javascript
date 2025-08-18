Alright — here’s the README rewritten as a **full study guide** with **examples for every task** so you can both understand and implement quickly.
I’ve kept it clean and visually scannable so you can find what you need fast.

---

# 🧪 0x06 – Unit Tests in JavaScript

## 📌 Overview

This project is all about **testing JavaScript applications** — from simple functions to full Express server endpoints — using **Mocha**, **Chai**, and **Sinon**.
You’ll write **unit tests**, **integration tests**, work with **spies/stubs**, handle **async code**, and organize **test suites** effectively.

---

## 🎯 Learning Objectives

By the end of this project, you’ll be able to:

* ✅ Write Mocha test suites with `assert` and Chai’s `expect`
* ✅ Organize tests with `describe` and hooks (`beforeEach`, `afterEach`)
* ✅ Use **spies** and **stubs** to inspect and control function calls
* ✅ Test **async functions** with `done`
* ✅ Skip tests without deleting them
* ✅ Write **integration tests** for Node/Express APIs

---

## 📦 Requirements

* **OS:** Ubuntu 18.04
* **Node:** 12.x.x
* All `.js` files must end with a new line
* Tests run with:

  ```bash
  npm run test *.test.js
  ```
* No warnings/errors allowed

---

## 📚 Resources

* [Mocha Docs](https://mochajs.org/)
* [Chai Docs](https://www.chaijs.com/)
* [Sinon Docs](https://sinonjs.org/)
* [Express Docs](https://expressjs.com/)
* [Request Module](https://www.npmjs.com/package/request)

---

## 🛠 Project Tasks

---

### **0. Basic test with Mocha & Node’s `assert`**

**`0-calcul.js`**

```js
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;
```

**`0-calcul.test.js`**

```js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
```

Run:

```bash
npm test 0-calcul.test.js
```

---

### **1. Combining descriptions**

**`1-calcul.js`**

```js
function calculateNumber(type, a, b) {
  const numA = Math.round(a);
  const numB = Math.round(b);

  if (type === 'SUM') return numA + numB;
  if (type === 'SUBTRACT') return numA - numB;
  if (type === 'DIVIDE') {
    if (numB === 0) return 'Error';
    return numA / numB;
  }
}
module.exports = calculateNumber;
```

**`1-calcul.test.js`**

```js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should add rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should subtract rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should divide rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error if divide by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
```

---

### **2. Chai assertion style**

**`2-calcul_chai.test.js`**

```js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
  it('SUM works', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('DIVIDE by zero returns Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
```

---

### **3. Spies with Sinon**

**`utils.js`**

```js
const Utils = {
  calculateNumber(type, a, b) {
    const numA = Math.round(a);
    const numB = Math.round(b);
    if (type === 'SUM') return numA + numB;
  }
};
module.exports = Utils;
```

**`3-payment.js`**

```js
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
```

**`3-payment.test.js`**

```js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct args', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
```

---

### **4. Stubs**

**`4-payment.test.js`**

```js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi with stub', () => {
  it('should log the stubbed total', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    stub.restore();
    consoleSpy.restore();
  });
});
```

---

### **5. Hooks**

**`5-payment.test.js`**

```js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
let consoleSpy;

describe('sendPaymentRequestToApi with hooks', () => {
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs correct total for 100 + 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');
  });

  it('logs correct total for 10 + 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 20');
  });
});
```

---

### **6. Async tests with done**

**`6-payment_token.js`**

```js
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}
module.exports = getPaymentTokenFromAPI;
```

**`6-payment_token.test.js`**

```js
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        if (res.data === 'Successful response from the API') done();
        else done(new Error('Wrong response'));
      });
  });
});
```

---

### **7. Skipping tests**

```js
it.skip('1 is equal to 3', () => {
  expect(1 === 3).to.be.true;
});
```

---

### **8–10. Integration Tests**

**Example `api.js`**

```js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the payment system'));

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;
```

**Example `api.test.js`**

```js
const request = require('request');
const { expect } = require('chai');

describe('API integration', () => {
  it('GET / returns welcome message', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct message', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /available_payments returns correct JSON', (done) => {
    request('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(body).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('POST /login returns welcome message', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    }, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
```

---

## 🧪 Run Tests

```bash
npm install
npm test
```

For API tests, run:

```bash
node api.js &
npm test api.test.js
```

---
