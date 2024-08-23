import { useState } from "react";
import "./App.css";
import { PlayerControls } from "./components/PlayerControls";
import { TrackList } from "./components/TrackList";
import { MusicContext } from "./contexts/MusicContext";
import sinister from "./assets/sinister.mp3";
import stomp from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    currentTrackIndex: 0,
    isPlaying: false,
    tracks: [
      {
        name: "Sinister",
        file: sinister,
      },
      {
        name: "Stomp",
        file: stomp,
      },
      {
        name: "Underwater",
        file: underwater,
      },
    ],
  });
  return (
    <MusicContext.Provider value={[state, setState]}>
      <div>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
