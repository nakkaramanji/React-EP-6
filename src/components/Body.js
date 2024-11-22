import Resturant from "./Resturant";
import { rescon } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [list, Setlist] = useState(rescon);
  const [after, setafter] = useState(rescon);
  console.log(<Body />);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const li = after.filter((res) => res.info.avgRating > 3.5);
            Setlist(li);
          }}
        >
          above 3.5 stars
        </button>
        <button
          className="filter-btn1"
          onClick={() => {
            const li = after.filter((res) => res.info.avgRating > 4.3);
            Setlist(li);
          }}
        >
          above 4.3
        </button>
      </div>

      <div className="res-container" id="li">
        {list.map((res) => {
          return <Resturant key={res.info.id} resobj={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
