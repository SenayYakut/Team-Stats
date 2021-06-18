const team = {
    _players: [{
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 29
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 32
        },
        {
            firstName: 'James',
            lastName: 'Walker',
            age: 34
        }
    ],
    _games: [{
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Tigers',
            teamPoints: 52,
            opponentPoints: 89
        },
        {
            opponent: 'Giants',
            teamPoints: 12,
            opponentPoints: 7
        }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoint, opponentPoint) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoint,
            opponentPoints: opponentPoint
        };
        this._games.push(game);
    }
};

team.addPlayer("Steph", 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Toglers', 99, 101);
team.addGame('Dogers', 100, 97);
console.log(team.players);
console.log(team.games);