import { useState } from "react";
import Avatar from "../assets/image/profile.jpg";
import AlbumCard from "../components/AlbumCard";
import PlaylistCard from "../components/PlaylistCard";
const Search = ({ results }) => {
  const [loading, setLoading] = useState(false);
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
    <div className={`w-full h-0 flex flex-col gap-8 overflow-y-auto grow px-16 py-4 ${results.length > 0 ? "" : "hidden"}`}>
      <div className="h-auto gap-2.5 flex flex-col">
        <p className="text-3xl text-neutral-800 font-black">Tracks</p>
        <table className="table-fixed">
          <thead className="border border-neutral-300 border-x-0 border-t-0">
            <tr>
              <th className="text-primary w-2/5 text-start font-normal py-3">TRACK</th>
              <th className="text-primary w-1/5 text-start font-normal py-3">ARTIST</th>
              <th className="text-primary w-1/5 text-start font-normal py-3">ALBUM</th>
              <th className="text-primary w-1/5 text-start font-normal py-3">DURATION</th>
            </tr>
          </thead>
          <tbody>
            {/* Pastikan results[0] ada dan merupakan array */}
            {Array.isArray(results) && results.length > 0 && Array.isArray(results[0]) ? (
              results[0].map((result, index) => (
                <tr key={index} className="w-full">
                  <td className="text-neutral-800 w-auto flex items-center gap-4 py-2">
                    <img src={result.album.images[0].url} alt="" className="w-12" />
                    <p className="line-clamp-1">{result.name}</p>
                  </td>
                  {/* Jika result.artists adalah array, ambil nama artis pertama atau gabungkan nama artis */}
                  <td className="text-neutral-800 w-1/5">{result.artists.map((artist) => artist.name).join(", ")}</td>
                  <td className="text-neutral-800 w-1/5">{result.album.name}</td>
                  <td className="text-neutral-800 w-1/5">{formatMilliseconds(result.duration_ms)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-neutral-800">
                  No results found
                </td>
              </tr>
            )}
            {Array.isArray(results) && results.length > 0 && Array.isArray(results[0]) ? (
              results[0].map((result, index) => (
                <tr key={index} className="w-full">
                  <td className="text-neutral-800 w-auto flex items-center gap-4 py-2">
                    <img src={result.album.images[0].url} alt="" className="w-12" />
                    <p className="line-clamp-1">{result.name}</p>
                  </td>
                  {/* Jika result.artists adalah array, ambil nama artis pertama atau gabungkan nama artis */}
                  <td className="text-neutral-800 w-1/5">{result.artists.map((artist) => artist.name).join(", ")}</td>
                  <td className="text-neutral-800 w-1/5">{result.album.name}</td>
                  <td className="text-neutral-800 w-1/5">{formatMilliseconds(result.duration_ms)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-neutral-800">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="h-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Albums</h1>
        <div className="flex flex-wrap gap-4 h-auto">
          {Array.isArray(results) && results.length > 0 && Array.isArray(results[2]) ? (
            results[2].map((result, index) => (
              <>
                <AlbumCard key={index} name={result.name} artist={result.artists} cover={result.images[0].url} released={result.released_date} />
              </>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-neutral-800">
                No results found
              </td>
            </tr>
          )}
        </div>
      </div>
      {/* playlist */}
      {/* <div className="h-auto gap-2.5 flex flex-col">
        <h1 className="text-3xl text-neutral-800 font-black">Playlist</h1>
        <div className="flex flex-wrap gap-4 h-auto">
          {Array.isArray(results) && results.length > 0 && Array.isArray(results[3]) ? (
            results[3].map((result, index) => (
              <PlaylistCard key={index} name={result.name} owner={result.owner?.display_name} cover={result.images?.[0]?.url} total={result.tracks.total} />
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-neutral-800">
                No results found
              </td>
            </tr>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Search;
