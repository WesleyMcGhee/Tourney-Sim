interface IGames {
  player1: number;
  player2: number;
  player1Pick: string;
  player2Pick: string;
  winner: number;
}

interface IPlayer {
  seed: number;
  place: number;
  games: IGames[];
}

// Eventually I will want to make this take in a param that give the amount of people playing
function tourney() {

}

