import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicContext);

    // Function 1: togglePlay
    const togglePlay = () => {
        if (state.isPlaying) {
            setState({...state, isPlaying: false})
            state.audioPlaying.pause();
        } else {
            setState({...state, isPlaying: true})
            state.audioPlaying.play();
        }
    }

    // Function 2: playTrack
    const playTrack = (index) => {
        if (index === state.currentTrackIndex) {
            togglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState({ ...state, currentTrackIndex: index, isPlaying: true })
        }
    }

    // Function 3: playNextTrack
    const playNextTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === state.tracks.length -1 ? (newIndex = 0) : (newIndex = state.currentTrackIndex + 1);
        playTrack(newIndex)
    }

    // Function 4: playPreviousTrack
    const playPreviousTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === state.tracks.length -1 ? (newIndex = state.tracks.length -1) : (newIndex = state.currentTrackIndex - 1);
        playTrack(newIndex)
    }

    return {
        togglePlay,
        playTrack,
        playNextTrack,
        playPreviousTrack,
    }
};

export { useMusicPlayer };