"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loadData } from "./loadData";

const MovieCard = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    loadData().then((data) => {
      setMovieData(data);
    });
  }, []);

  const movies = movieData?.results;

  return (
    <>
      {movies?.map((movie) => (
        <figure
          key={movie?.id}
          className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        >
          <Image
            height={24}
            width={500}
            layout="responsive"
            className="w-full object-cover"
            src={movie?.poster_path}
            alt={movie?.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie?.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center space-x-1 mb-5">
              <Image height={24} width={14} src="/assets/star.svg" alt="" />
              <Image height={14} width={14} src="/assets/star.svg" alt="" />
              <Image height={4} width={14} src="/assets/star.svg" alt="" />
              <Image height={14} width={14} src="/assets/star.svg" alt="" />
              <Image height={14} width={14} src="/assets/star.svg" alt="" />
            </div>
            <Link
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              // href="./modal.html"
              href={`movies/${movie?.id}`}
            >
              <Image height={14} width={14} src="/assets/tag.svg" alt="" />
              <span>Details</span>
            </Link>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default MovieCard;
