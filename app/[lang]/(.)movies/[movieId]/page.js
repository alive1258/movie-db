import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
// modal
const PhotoModal = ({ params: { movieId, lang } }) => {
  return (
    <Modal>
      <MovieDetails movieId={movieId} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
