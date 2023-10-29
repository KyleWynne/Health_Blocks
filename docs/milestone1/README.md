# Milestone 1

**Group Members:** Natalie Huante, Kyle Wynne, Lauren Szlosek

## Reflection
During this first milestone, we had to shift directions from our original project goal. We came in to multiple office hours sessions with Professor Kurz and came to the conclusion that our original idea no longer fit with the blockly format. Our original idea, being a program that would provide a user with a customized workout and/or dietary plan has been shifted to a similar health-related program. This milestone reflects our shift to a program that will allow users to easily receieve nutritional details about their meals. We are using the Nutritionix API and their natural language processing tool in order to search their database for these nutritional details. At the moment, we only have three main blocks that accomplish this function. However, there is still much progress we can make it making this process even more customizable and easy-to-use for the user. For instance, the Nutrionix API also allows us to access specific aspects of food details and possibly tracking a user's meals. 

Reminder: In office hours, we discussed how our blockly application must export the generated code to be ran on the user's local computer rather than running it on the blockly page. Due to the format of the API calls we are using, running them on the blockly page ultimately gives us [object Promise] as the output. Although we are following the correct syntax and rules for using asynchronous functions to run these API calls, we could not find a solution to getting around this object promise. So, our solution with Prof. Kurz was to instead output the code and run it locally on a machine. 

## How to Run And Test
1. Visit the blockly site at https://kylewynne.github.io/Health_Blocks/
2. You may use the blocks provided with the following considerations
    - You must begin the sequence of blocks with a single "set up Nutritionix API with credentials" block
    - You may enter any string of text describing your meal or food as the variable to the "search for foods matching" block
3. Click "Generate Javascript" to generate code that will execute the commands you specified in your blocks
4. Click "Export Javascript" to download the generated code
5. In a terminal, locate and run the javascript file downloaded in the previous step
    - Note: You must have Node.js installed on your computer to run a javascript file. You can download the installer at https://nodejs.org/en/download. If you can run the command ```node --version``` without an error, then you should now be able to run a javascript file in the below format. If you have installed the package but cannot run the above command, you may want to add it to your path. For more details on how to do this, see https://www.geeksforgeeks.org/installation-of-node-js-on-windows/.
    - To run a javascript file code.js you can run the following command
    ```node code.js```
6. You should now see the output of your executed code in the terminal and the nutrional details acquired from Nutritionix given your input. 