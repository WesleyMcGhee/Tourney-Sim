import type IGames from "./game.type";

export default interface IPlayer {
  seed: number;
  place: number;
  games: IGames[];
}
