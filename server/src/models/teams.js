const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    gamesPlayed: {
        type: Number,
        required: true
    },
    wins: {
        type: Number,
        required: true
    },
    draws: {
        type: Number,
        required: true
    },
    losses: {
        type: Number,
        required: true
    },
    goalsScored: {
        type: Number,
        required: true
    },
    goalsAgainst: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    year: {
        type: Date,
        required: true
    }
});

module.exports = { TeamSchema };