import StartGameChoices from "./components/StartGameChoices";

export default function Home() {
  return (
    <main>
      <div>TicTacToe</div>

      <span>An internet based TicTacToe game with voice and text chat</span>
      <span>Best to 5 </span>

      <StartGameChoices />
    </main>
  );
}
