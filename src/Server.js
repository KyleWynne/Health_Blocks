import express from 'express';
import cors from 'cors';
import vm from 'vm';
// declare app to have the type of express
const app = express();
let port = 3000;
// use cors and express.json
app.use(cors());
app.use(express.json());

let queue = [];
// have the server listen till it gets a request
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// if there is an error, try the next port
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
// if the server gets a request to the root, send a response
app.post('/run-code', async (req, res) => { // Make the function async
  const { code } = req.body;

  console.log("Executing Code: ", code);
  
  try {
    // Create a new Script object from the code
    // and create a context with the fetch function
    const script = new vm.Script(code);
    const context = { fetch, Promise }; // Include Promise in the context

    // Execute the script and get the result
    // Use VM to make sure the code is executed Sychronously
    const result = script.runInContext(vm.createContext(context));

    // Wait for the Promise to resolve
    const output = await Promise.resolve(result);
    console.log(`Output: ${JSON.stringify(output)}`);
    res.send(`Output: ${JSON.stringify(output)}`);
    // catch errors
  } catch (error) {
    console.error(`Execution error: ${error}`);
    return res.status(500).send(`Execution error: ${error}`);
  }
});