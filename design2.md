# Design 2

## Pseudo Code

### Log Food Intake
- **Code**: `LogFood(food, calories)`
- **Output ()**: 
  - Append `food` and `calories` to user's food diary.

### Calculate Calories Burned
- **Code**: `CalculateCaloriesBurned(exerciseType, duration)`
- **Output ()**: 
  - Look up calorie burn rate for `exerciseType`.
  - Calculate `caloriesBurned = calorieBurnRate * duration`.
  - Add `caloriesBurned` to daily calorie tracking.

### Meal Planner
- **Code**: `MealPlanner(dietaryPreferences, nutritionalGoals)`
- **Output ()**:
  - Based on `dietaryPreferences` and `nutritionalGoals`, suggest balanced meal options for the day.

### Create Exercise Session
- **Code**: `CreateExerciseSession()`
- **Output ()**:
  - Initialize an empty exercise session.

### Set Exercise Duration
- **Code**: `SetExerciseDuration(exercise, duration)`
- **Output ()**:
  - Set `duration` for the specified `exercise` in the exercise session.

### Set Exercise Type
- **Code**: `SetExerciseType(exercise, type)`
- **Output ()**:
  - Set `type` for the specified `exercise` in the exercise session.

### Exercise Details
- **Code**: `ExerciseDetails(exercise, details)`
- **Output ()**:
  - Add `details` to the specified `exercise` in the exercise session.

### Set Goal / Reward
- **Code**: `SetGoalReward(goal, reward)`
- **Output ()**:
  - Set a user-defined `goal` and corresponding `reward`.

### Set Daily Step Goal
- **Code**: `SetDailyStepGoal(stepGoal)`
- **Output ()**:
  - Set the daily step count goal to `stepGoal`.

### Set Calorie Intake Goal
- **Code**: `SetCalorieIntakeGoal(calorieGoal)`
- **Output ()**:
  - Set the daily calorie intake goal to `calorieGoal`.


## Recursion Use Case

A recursive use case is through designing a workout. A workout can have a different workout that falls under a different type. This, for example, could be strength training and a run in the same gym session.

Imagine a user creating a complex workout routine using recursive blocks:

```pseudocode
CreateExerciseSession()
SetExerciseType(exercise1, "Strength Training")
SetExerciseDuration(exercise1, 45 minutes)
SetExerciseType(exercise2, "Cardio")
SetExerciseDuration(exercise2, 30 minutes)

CreateExerciseSession()  # nested session
SetExerciseType(exercise3, "Strength Training")
SetExerciseDuration(exercise3, 30 minutes)
SetExerciseType(exercise4, "Cardio")
SetExerciseDuration(exercise4, 20 minutes)
```

## Project Data

We plan to have a built-in database to help users track their daily calories. Many different functions will update the daily calorie count. This way, if a user would like to, we can keep a history of daily calorie changes to figure out what works and what does not. If we look closer to the pseudcode of the above functions we plan to implement, then we can think a bit deeper on what data we would have to store. 

Based on the above functions, the things our project would have to store include:
  - user's food diary : includes both meals and calories, can be added to by the user
  - a dictionary for the number of calories an exercise type typically burns in a minute, the user uses this to calculate how many calories they have burned given the duration and exercise type
  - a list of meal options and what nutritionalGoals and dietaryPreferences they are associated with, this could be a list of lists storing the meal option and its attributes, this would give us the flexibilty to attach a different number of attributes to each meal option when necessary
  - the user's exercise sessions: the user can edit details and start exercise sessions so we need to be able to track their sessions and their details including duration, details, and type
  - bank of user-defined goals and rewards: we need to be able to track the user's goals and what their reward will be upon completion, this can also be stored as a dictionary or a list of lists
  - the user's step tracker: we need to track the user's steps and also include their inputted goal in order to calculate when or if they meet it given their inputted activity
  - the user's calorie goal: we need to remember the user's calorie intake goal in order to address whether they have met it or not

This is the list of data we need to storer given the functions we have created thus far. However, this list can and most likely will be updated to reflect the progress made and additions to the project. Most of the above data can be stored in a single variable or in a list of lists or dictionaries. This is due to the fact that we want users to be able to create objects (such as an exercise session) and add attributes and details to them. 

The blockbased programming language will interact with this data and compliments it quite well. As a user creates an exercise session, for example, we can connect that to the declaration of a variable or of a list item. Then, as they add more details or attributes, we can call upon that already declared item and pass through the user-inputted information. Therefore, it will allow a smooth transition from the user input in the block-based language into the back-end code that manages such data. 