const mongoose = require('mongoose');
const addNewTeam = require('../controllers/team').addNewTeam;
const getTeams = require('../controllers/team').getTeams;
const getTeam = require('../controllers/team').getTeam;
const updateTeam = require('../controllers/team').updateTeam;
const deleteTeam = require('../controllers/team').deleteTeam;

const routes = (app) => {
    app.route('/teams')
        .get(getTeams)
        .post(addNewTeam);

    app.route('/teams/:TeamId')
        .get(getTeam)
        .put(updateTeam)
        .delete(deleteTeam);
}

module.exports = routes;