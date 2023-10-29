# Health_Blocks

**Group Members:** Natalie Huante, Kyle Wynne, Lauren Szlosek

## Instructions For Running Our Project

To recreate the demo, follow the below instructions:
Go to GitHub the Pages Deployment: Here
if running on your machine, navigate to index.html in your filesystem, double-click, and open with the browser of your choice

use the blocks to create code. Our recommended test is:

set up nutritionix API
Search foods -> Text Input: apple
Print Calories -> Calorie Sum (300, Calorie Sum (300, 400)

hit generate javascript
hit export javascript

now you have a file called code.js; this code was designed to be run with the node.js Java compiler.
if you do not have the node.js java compiler, find further information here: https://nodejs.org/en/download

once installed, you'll want to add the node-fetch package. To install node-fetch, open a terminal window and run "npm install node-fetch"

then you can run the code in the command line with: node code.js

## Project Description & Motivation: 

The original aim of this project was to provide an accessible and user-friendly program for users to create individualized health and fitness through the integration of the Blockly API. However, upon revisions and discussions with Professor Kurz, we can shifted the end goal of this project. Now, the goal of this project is to provide an accessible and user-friendly program for users to look up nutritional information on their meals. We will use the Blockly API as the foundation for the program and implement a domain specific language that will provide users with a more customized experience. We plan to have users be able to enter information about their meals and then provide them with nutrional details. 

The use of a block-based coding system aligns with our motivation for this project since it will allow the program to be extremely intuitive and user-friendly. Therefore, this health and nutrition system will not only be accessible but easy to understand and to master to those outside of the computer science world. The block-based format will also allow our team to give our users both flexibility and constraints. Users will be able to move blocks around and snap them together in differing combinations which gives the flexibility in the final outcome. However, we can also implement constraints on these combinations by only allowng certain blocks to fit into other blocks and so on. With this ability, our team will be able to force certain quality control restrictions on usres when creating their personalized plans.

## Relating to Parsing, Interpretation, & Compilation:
The project described above has a relation to parsin, interpretation and compilation alike. Below we provide a brief description as to how they are related and why they are important to the overall functionality of our project. 

### Parsing: 
Given that we are using the Blockly API and UI it is important to understand how parsing must be included in its core functionality. Blockly allows us to provide a user-friendly, block-based, visual interface. Although this is helpful on the user-end of things, it now requires us to be able to convert what the user creates visually into code that our computers can understand. For instance, if a user creates a loop and conditional, how will we then pass it on to our program that will process that information. If we look into Blockly, we will find that it processes these visual components and converts them into an AST or an abstract syntax tree, a structure that is machine-readable. This tree can then be used by the machine and allows for the DSL syntax to be respected as well upon conversion. If the parsing step is not functioning properly, it is apparent how it will affect the correctness of the rest of the program.

### Interpretation:
The interpretation step follows that of parsing. While parsing converts and creats the AST tree, interpretation then takes that AST and performs calculations and operations upon execution and with the components of that tree. For instance, if the tree includes a mathematical operations such as addition or subtration, the interpretation step is where that operation will actually be executed and a result will be calculated from it. The interpretation is important to the overal functionality of our project because it will allow the user to see the outcome of their changes. 

### Compilation: 
The compilation step can be seen as an additional interpretation step where the information provided by the user and the operations conducted upon them will be further converted into another programming language. It can now be read in a text-based format rather than from the AST tree and will allow our team to manipulate code to further implement additional features into the project, such as the export function we described above. The compilation step is important in terms of the versalilty and implementation of more complication operations within our project. 

### Github Site
https://kylewynne.github.io/Health_Blocks/ 

<details>
<summary>Old Project README (Click to Expand/Collapse)</summary>

The goal of this project is to provide an accessible and user-friendly program for users to create individualized health and fitness plans. We will use the Blockly API as the foundation for the program and implement a domain specific language that will provide users with a more customized experience. We plan to have users enter their health-related information and then provide them with customizable options for a fitness or dietary plan. In addition, we would also like to allow users the ability to set health and fitness goals along with their plan. The Blockly UI will fit nicely into this applciation given its algorithmic and customizable nature. 

The use of a block-based coding system aligns with our motivation for this project since it will allow the program to be extremely intuitive and user-friendly. Therefore, this Health and Fitness System will not only be accessible but easy to understand and to master to those outside of the computer science world. The block-based format will also allow our team to give our users both flexibility and constraints. Users will be able to move blocks around and snap them together in differing combinations which gives the flexibility in the final outcome. However, we can also implement constraints on these combinatinos by only allowng certain blocks to fit into other blocks and so on. With this ability, our team will be able to force certain quality control restrictions on usres when creating their personalized plans. 

One last feature we would like to implement in our project would be to produce a cleaner and more digestable format for saving users' plans. The motivation behind this feature would be to allow users to save their custom plan in a format that will be easier to use and refer back upon in the future. This is very important for the user experience given that it will prevent them from having to continually stare at the different blocks. Although the block-based UI presents many benefits, when creating plans, it is not the best format for reading them. Instead, we would like the user to read a document that contains all the steps to the plan they have created in order to continue our goal of making this program an intuitive and enjoyable experience. 

</details>

