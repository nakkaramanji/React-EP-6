import Resturant from "./Resturant";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";

const Body = () => {
  const [list, Setlist] = useState([]);
  const [after, setafter] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    Setlist(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setafter(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  // if (list.length === 0) {
  //   return <Shimmer />;
  // }
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchcon"
            value={searchtext}
            onChange={(p) => {
              setsearchtext(p.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterserch = after.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              filterserch.length > 0 ? Setlist(filterserch) : Setlist(after);
            }}
          >
            search
          </button>
        </div>
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
