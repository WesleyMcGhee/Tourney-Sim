import IPlayer from "./types/player.type";

export default function game(player1: IPlayer, player2: IPlayer): IPlayer {
  const player1Pick = Math.floor(Math.random() * 3) + 1;
  const player2Pick = Math.floor(Math.random() * 3) + 1;

  if (player1Pick === player2Pick) {
  }
}
