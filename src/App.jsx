import { useState } from "react";
import "./App.css";
import { PlayerControls } from "./components/PlayerControls";
import { TrackList } from "./components/TrackList";
import { MusicContext } from "./contexts/MusicContext";

function App() {
  const [state, setState] = useState();
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
