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

We plan to have a built-in database to help users track their daily calories. Many different functions will update the daily calorie count. This way, if a user would like to, we can keep a history of daily calorie changes to figure out what works and what does not.
