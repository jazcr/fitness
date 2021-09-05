const router = require('express').Router();
const Workout = require('../models/Workouts');

// router.post('/api/workouts', async (req, res) => {
//     try {
//         const newWorkout = await Workout.create(req.body);
//         newWorkout.save();

//         res.status(200).json(newWorkout);
//     } catch (e) {
//         res.status(500).json(e);
//     }
// });

// *POST* adds workout to db
router.post('api/workouts', async (req, res) => {
    try {
        //adding/saving workout
        const addWorkout = await Workout.create(req.body);
        addWorkout.save();
    } catch (err) {
        res.status(500).json(err);
    }
});

// *GET* getting previous workout
router.get('/api/workouts', async (req, res) => {
    try {
        //aggregate gathers all specified fields
        const previousWorkout = await Workout.aggregate([
            {
                //adding all excercise times together
                $addFields: {
                    totalDuration: {$sum: "$exercises.duration"}
                }
            }
        ]);
        res.status(200).json(previousWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});