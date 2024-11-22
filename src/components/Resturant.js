import { CDN_URL } from "../utils/contants";
const Resturant = (pr) => {
  const { resobj } = pr;
  const { name, avgRatingString, costForTwo, cuisines, cloudinaryImageId } =
    resobj?.info;
  return (
    <div className="res-card" style={{ background: "grey" }}>
      <img className="image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>

      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join("  ,")}</h4>
    </div>
  );
};
export default Resturant;
