import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';
import vm from 'vm';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let queue = [];

// app.post('/run-code', async (req, res) => {
//   queue.push({ req, res });

//   if (queue.length === 1) {
//     processQueue();
//   }
// });

// async function processQueue() {
//   if (queue.length === 0) return;

//   const { req, res } = queue[0];
//   const { code } = req.body;

//   console.log("Executing Code: ", code);
  
//   try {
//     const script = new vm.Script(code);
//     const context = { fetch, Promise };

//     const result = script.runInContext(vm.createContext(context));
//     const output = await Promise.resolve(result);
//     console.log(`Output: ${JSON.stringify(output)}`);
//     res.send(`Output: ${JSON.stringify(output)}`);

//     console.log(`Output: ${output}`);
//     res.send(`Output: ${output}`);
//   } catch (error) {
//     console.error(`Execution error: ${error}`);
//     res.send(`Execution error: ${error}`);
//   } finally {
//     queue.shift();
//     processQueue();
//   }
// }

app.post('/run-code', async (req, res) => { // Make the function async
  const { code } = req.body;

  console.log("Executing Code: ", code);
  
  try {
    const script = new vm.Script(code);
    const context = { fetch, Promise }; // Include Promise in the context

    // Execute the script and get the result
    const result = script.runInContext(vm.createContext(context));

    // Wait for the Promise to resolve
    const output = await Promise.resolve(result);
    console.log(`Output: ${JSON.stringify(output)}`);
    res.send(`Output: ${JSON.stringify(output)}`);
  } catch (error) {
    console.error(`Execution error: ${error}`);
    return res.status(500).send(`Execution error: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});