import BackArrow from "@/components/header/back/back-arrow";
const FavoriteLayout = ({ genre, myFavorite }) => {
  return (
    <div>
      <h1>Favorite Layout</h1>
      <BackArrow />
      <div id="genre-page">{genre}</div>
      <div id="my-favorite">{myFavorite}</div>
    </div>
  );
};

export default FavoriteLayout;
