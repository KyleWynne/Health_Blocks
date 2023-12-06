import express from 'express';
import cors from 'cors';
import vm from 'vm';

const app = express();
let port = 3000;

app.use(cors());
app.use(express.json());

let queue = [];

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is in use, trying with port ${port + 1}`);
    port++;
    server.close();
    server.listen(port);
  } else {
    // Handle other errors
    console.error(error);
  }
});

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