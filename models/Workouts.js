const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {

                type: {
                    type: String,
                    trim: true,
                    required: [true, 'Must chose between resistance and cardio'],
                },

                name: {
                    type: String,
                    minLength: 2,
                    required: [true, 'Excercise name must be at least 2 characters long'],
                },

                duration: {
                    type: Number,
                    required: [true, 'Please enter duration'],
                },

                distance: {
                    type: Number,
                },

                weight: {
                    type: Number,
                },

                sets: {
                    type: Number,
                    min: 1,
                },

                reps: {
                    type: Number,
                    min: 1,
                },
            },

        ],
    },
    {
        //converting input to json
        toJSON: {
            virtuals: true
        }
    });


const Workout = mongoose.model('Workouts', workoutSchema);

module.exports = Workout;

