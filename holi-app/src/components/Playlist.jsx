const songs = [
  {
    id: 1,
    title: "Hori Khele Raghuveera",
    url: "https://www.youtube.com/embed/87FYp3YLEBM",
  },
  {
    id: 2,
    title: "Balam Pichkari",
    url: "https://www.youtube.com/embed/0WtRNGubWGA",
  },
  {
    id: 3,
    title: "Ang Se Ang Lagana",
    url: "https://www.youtube.com/embed/bue7fClXlkI",
  },
];

const Playlist = () => {
  return (
    <div className="playlist">
      <h2>🎶 Top Holi Songs 🎶</h2>

      {songs.map((song) => (
        <div key={song.id} className="video-card">
          <iframe
            src={song.url}
            title={song.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Playlist;