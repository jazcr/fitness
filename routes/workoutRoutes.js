const router = require('express').Router();
const Workout = require('../models/Workouts');


// *POST* adds workout to db
router.post('/api/workouts', async (req, res) => {
    try {
        //adding/saving workout
        const addWorkout = await Workout.create(req.body);
        addWorkout.save();
        res.status(200).json(addWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});

// *PUT* updates workout by id
router.put('/api/workouts/:id', async (req, res) => {
    try {
        const adjustWorkout = await Workout.findByIdAndUpdate(req.params.id, {
            //appends the whole array as a single element
            $push: {
                exercises: req.body
            },
        }, 
        {
            new: true,
        }
        );

        res.status(200).json(adjustWorkout);
    } catch (e) {
        res.status(500).json(e);
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

//getting a range of workouts for graphs page
router.get('/api/workouts/range', async (req, res) => {
    try {
        const combinedWorkouts = await Workout.aggregate([
            {
                //adding all excercise times together
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
            //putting limit of 7 workouts to be aggregated
        ]).sort({ day: -1 }).limit(7);
        res.status(200).json(combinedWorkouts);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;