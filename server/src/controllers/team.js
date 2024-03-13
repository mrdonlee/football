const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

const TeamSchema = require('../models/teams');

const FootballTeam = mongoose.model('Football', TeamSchema);

fs.createReadStream('../assets/football.csv')
    .pipe(csv())
    .on('team', (row) => {
        const newTeam = new FootballTeam({
            team: row.Team,
            gamesPlayed: parseInt(row['Games Played']),
            wins: parseInt(row.Win),
            draws: parseInt(row.Draw),
            losses: parseInt(row.Loss),
            goalsScored: parseInt(row['Goals For']),
            goalsAgainst: parseInt(row['Goals Against']),
            points: parseInt(row.Points),
            year: parseInt(row.Year)
        });

        newTeam.save()
            .then(() => console.info('Team saved.'))
            .catch((e) => console.error('Error adding team: ', e));
    })

    .on('end', () => {
        console.info('Team data processed.');
        mongoose.disconnect();
    });

const addNewTeam = (req, res) => {
    let newTeam = new FootballTeam(req.body);

    newTeam.save((e, FootballTeam) => {
        if (e) {
            res.send(e);
        }
        res.json(FootballTeam);
    });
};

const getTeams = (req, res) => {
    Team.find({}, (e, FootballTeam) => {
        if (e) {
            res.send(e);
        }
        res.json(FootballTeam);
    });
};

const getTeam = (req, res) => {
    Team.findById(req.params.TeamId, (e, FootballTeam) => {
        if (e) {
            res.send(e);
        }
        res.json(FootballTeam);
    });
};

const updateTeam = (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.TeamId }, req.body, { new: true }, (e, FootballTeam) => {
        if (e) {
            res.send(e);
        }
        res.json(FootballTeam);
    });
};

const deleteTeam = (req, res) => {
    Team.remove({ _id: req.params.TeamId }, (e, FootballTeam) => {
        if (e) {
            res.send(e);
        }
        res.json({ message: 'Successful' });
    });
};

module.exports = { addNewTeam, getTeams, getTeam, updateTeam, deleteTeam };