import loader from "../images/reload.png";

const Songs = ({ songsJSON }) => {
  return (
    <>
      {songsJSON.length > 0 ? (
        <div className="font-Lato grid grid-rows-3 grid-cols-2 w-full gap-4 text-white md:grid-rows-2 md:grid-cols-3">
          {songsJSON.map((song) => {
            const { id, author, imageUrl, playUrl, title } = song;
            return (
              <div className="flex flex-col items-center" key={id}>
                <a href={playUrl}>
                  <img
                    src={imageUrl}
                    alt={`${title} by ${author}`}
                    className="w-full object-cover aspect-square rounded-xl hover:scale-105 duration-300"
                  />
                </a>
                <a href={playUrl} className="text-xl">
                  {title}
                </a>
                <p className="text-sm text-gray-400">{author}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" p-36 py-56 w-full text-center">
          <img src={loader} alt="loading screen" className=" animate-spin" />
        </div>
      )}
    </>
  );
};

export default Songs;
