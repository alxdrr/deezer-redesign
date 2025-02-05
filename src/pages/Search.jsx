import { useContext } from "react";
import search from "../assets/icon/search.gif";
import { PlayerContext } from "../context/PlayerContext";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
// import AlbumCard from "../components/AlbumCard";
const Search = () => {
  const { playWithId, playStatus, setMusicID, pause, searchResults, trackData, track } = useContext(PlayerContext);
  const handlePlaySong = (id) => {
    setMusicID(id);
  };
  function formatMilliseconds(ms) {
    // Menghitung total detik dari milidetik
    const totalSeconds = Math.floor(ms / 1000);

    // Menghitung menit dan detik
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Menambahkan nol di depan jika menit atau detik kurang dari 10
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Mengembalikan hasil dalam format MM:SS
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className="w-full">
      <div className={`w-full p-4 xl:p-10 flex flex-col gap-8 overflow-y-auto h-full ${searchResults.length > 0 ? "" : "hidden"}`}>
        <div className="h-auto gap-2.5 flex flex-col">
          <p className="text-3xl text-neutral-800 font-black">Tracks</p>
          <table className="table-fixed border-spacing-x-1 border-separate">
            <thead className="border border-neutral-300 border-x-0 border-t-0">
              <tr>
                <th className="text-primary w-2/5 text-start font-normal py-3">TRACK</th>
                <th className="text-primary w-1/5 text-start font-normal py-3">ARTIST</th>
                <th className="text-primary w-1/5 text-start font-normal py-3">ALBUM</th>
                <th className="text-primary w-1/5 text-start font-normal py-3">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {trackData &&
                trackData.map((result, index) => (
                  <tr key={index} className="w-full hover:bg-purple-100 transition-colors duration-150 cursor-pointer">
                    <td className="text-neutral-800 relative w-auto flex items-center gap-4 py-2 group ">
                      <div className="absolute  aspect-square w-12 flex items-center justify-center h-full group-hover:opacity-100 group-hover:z-30 transition-opacity duration-300">
                        <img src={result.album.images[0].url} alt="" className="brightness-50" />
                        {playStatus && result.name === track.name ? (
                          <>
                            <IoPauseCircleSharp onClick={() => pause()} className="text-primary bg-white rounded-full text-2xl cursor-pointer absolute" />
                          </>
                        ) : (
                          <IoPlayCircleSharp
                            onClick={() => {
                              handlePlaySong(result.id), playWithId(result.name);
                            }}
                            className="text-primary bg-white rounded-full text-2xl absolute cursor-pointer"
                          />
                        )}
                      </div>
                      <img src={result.album.images[0].url} alt="" className="w-12 z-0 group-hover:opacity-0 transition-opacity duration-300" />
                      <p className="line-clamp-1">{result.name}</p>
                    </td>
                    {/* Jika result.artists adalah array, ambil nama artis pertama atau gabungkan nama artis */}
                    <td className="text-neutral-800 w-1/5">
                      <p className="line-clamp-1">{result.artists.map((artist) => artist.name).join(", ")}</p>
                    </td>
                    <td className="text-neutral-800 w-1/5">
                      <p className="line-clamp-1">{result.album.name}</p>
                    </td>
                    <td className="text-neutral-800 w-1/5">{formatMilliseconds(result.duration_ms)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`flex flex-col items-center top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 ${searchResults.length > 0 ? "hidden" : ""}`}>
        <img src={search} className="w-32" alt="" />
        <p className="text-neutral-500 text-xl">Try search for some tracks</p>
      </div>
    </div>
  );
};

export default Search;
