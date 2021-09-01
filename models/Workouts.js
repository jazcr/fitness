const { model, Schema } = require('mongoose');

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: String,
                required: [true, 'Must chose between resistance and cardio'],
            },
            {
                name: String,
                minLength: 2,
                required: [true, 'Excercise name must be at least 2 characters long'],
            },
            {
                duration: Number,
                required: [true, 'Please enter duration'],
            },
            {
                distance: Number,
            },
            {
                weight: Number,
                min: 1,
            },
            {
                sets: Number,
                min: 1,
            },
            {
                reps: Number,
                min: 1,
            },

        ],
    });


const Workout = mongoose.model('Workouts', workoutSchema);

module.exports = model('Workouts', workoutSchema);

