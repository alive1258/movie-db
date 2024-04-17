import { getDictionary } from "@/app/[lang]/dictionaries";

import { loadData } from "./loadData";
import Image from "next/image";

const MovieDetails = async ({ movieId, lang }) => {
  const dictionary = await getDictionary(lang);
  // console.log(movieId);
  // Find the movie with the matching ID
  // const foundMovie = loadData?.results?.find((movie) => movie.id == id);
  const movieData = await loadData();

  // Find the movie with the matching ID
  const movie = movieData?.results?.find((movie) => movie?.id === movieId);
  return (
    <>
      <section className="container">
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={movie?.backdrop_path}
            height={500}
            width={500}
            alt="backdrop_path"
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image
              height={300}
              width={300}
              src={movie?.poster_path}
              alt="backdrop_path"
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">
              {movie?.title}
            </h2>
            <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {movie?.release_date}</li>
              <li>Average Vote : {movie?.vote_average}</li>
              <li>Vote Count : {movie?.vote_count}</li>
              <li>Popularity : {movie?.popularity}</li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary?.streamInHD}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary?.downloadInHD}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
