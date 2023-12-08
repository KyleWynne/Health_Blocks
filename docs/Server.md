## Server Information Discussed during the Final Presentation

The Server Functions as a shell. The server will execute all api calls sent to it and only post the last result. 
This is because the server must execute the API calls Synchronusly for a result to be returned from the API. 
The biggest challenge for running the API calls on the server is getting the calls to execute Sychronusly. 
This entails having the Server wait for the API to return a full result rather than an object promise. 
An object promise is when the API does not finish the query so the artifact of the promised query that is initialised is what gets returned.
To avoid these we used the vm library which allowed us to simulate a command line response on the server.
The vm library had the drawback of only being able to post the most recent API response. 
This is why we use the run code button similarly to how a shell runs and why we modified the output div to save previous responses.
The intended best use of this system is to go one at a time executing API calls, then creating the calorie sum with the real time api responses.
The User can then export their fully completed javascript fileand run the program they constructed on their hardware if they feel so inclined.

The vm library is only used with the node.js compiler and has full documentation located Here: https://nodejs.org/api/vm.html

Note for Prof Kurz: I do not know how useful VM will be for the haskell shell that we talked about in class but I think the idea behind the library might be applicable. 
The vm library is convenient because it does alot of the heavy lifting on setting up an environment for code execution. 
There may be a Haskell version of this depending on how widespread user created libraries are. If not setting up an environment similar to the one the vm makes would be quite a large project.
