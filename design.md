# Preliminary block designs

## API Set Up
- Block to set up Nutritionix API with credentials

## Food Input
- Block to allow the call the Nutrutionix API for a food search
- Text block to input food string

## Calorie Input
- Block for number of calories needed to be consumed
- Block to sum up calories

  
# high-level descriptions

## API Set Up 
- API Set Up: This block serves as the initial setup for integrating the Nutritionix API into the program. It allows users to avoid having to put in API credentials, such as an API key or authentication tokens, ensuring that the program can securely access Nutritionix data without each individual having to set it up.

## Exercise Blocks
- Food Match: This block enables users to initiate a call to the Nutritionix API for food search. It acts as a trigger for fetching nutritional information about specific foods.
- Text Input: This text block allows users to input the name or description of the food they want to search for within the API.

## Motivation Blocks
- Calorie Amount: This block provides a way for users to specify the number of calories they need to consume. 
- Recursive Sum: The block does not generate code but performs the full recursive sum and serves as the input.

<details>
<summary>Old Project Design File</summary>
# Preliminary block designs

## Dietary Blocks 
- Log Food Intake: This lets users record the foods they eat, along with nutritional information (user-generated, not language-generated).
- Calculate Calories Burned: Computes the calories burned during a specified exercise
- Meal Planner: Helps users plan meals by suggesting balanced recipes.

## Exercise Blocks
- Create Exercise Session: create a skeleton that can be filled in to create an exercise session
- Set Exercise Duration: Sets the duration for the exercise session.
- Set Exercise type: Choose what type of exercise
- Exercise Details: Any details like a plan for a specific lift, etc.

## Motivation Blocks
- Set Goal / Reward: set a nonspecific exercise goal and a reward for reaching that goal
- Set Daily Step Goal: Set a daily step count goal.
- Set Calorie Intake Goal: Establishes daily calorie intake targets.

# high-level descriptions

## Dietary Blocks 
- Log Food Intake: When this block is used, it allows user to add information regarding whay the food is and the nutritioanl break down. This information is stored in a database.
- Calculate Calories Burned: When this block is used, it prompts users to select a specific exercise session from their plan. It then calculates the estimated calories burned based on the user's body weight, exercise duration, and exercise type. This information is added to the user's daily calorie tracking.
- Meal Planner: When this block is used, it provides users with meal suggestions based on their dietary preferences, nutritional goals, and any logged food intake data. Users can select recipes, and the block generates a meal plan for the day, ensuring balanced nutrition.

## Exercise Blocks
- Create Exercise Session: When this block is used, it allows users to create a new exercise session, providing a blank template where they can add specific exercises, durations, and other details to customize their workout plan.
- Set Exercise Duration: When this block is used within an exercise session, it prompts users to specify the duration for a particular exercise. Users can input the duration in minutes or specify the number of repetitions for strength training exercises.
- Set Exercise type: This block is used within an exercise session and allows users to select the type of exercise they want to include, such as cardio, strength training, or flexibility exercises.
- Exercise Details: When this block is used within an exercise session, it opens an editor where users can provide detailed instructions for each exercise, including sets, reps, weight, and any other relevant information.

## Motivation Blocks
- Set Goal / Reward: This block allows users to set personalized exercise goals, such as running a certain distance or reaching a specific weightlifting target. Users can also define a reward for themselves upon achieving these goals, providing motivation.
- Set Daily Step Goal: When this block is used, users can specify a daily step count goal, which will be tracked and displayed in their fitness plan. Users can adjust this goal as their fitness level and progress change.
- Set Calorie Intake Goal: This block allows users to set daily calorie intake goals based on their dietary objectives, such as weight loss or maintenance. It helps users monitor their calorie consumption and stay within their target range.

</details>
