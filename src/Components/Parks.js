import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const url =
  "https://developer.nps.gov/api/v1/parks?limit=10&api_key=fqcD9ajfrQy8VHiZXiF15L4qgQ0r40KTsqmj39eP";

export default function Parks() {
  const [parksArray, setParksArray] = useState([]);
  const [allParks, setAllParks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch API data");
        }

        const result = await response.json();
        return result.data;
      } catch (error) {
        console.error(error);
        return [];
      } finally {
        setLoading(false);
      }
    };

    const getApiData = async () => {
      let apiData = await fetchApiData();
      setParksArray(apiData);
      setAllParks(apiData);
    };

    getApiData();
  }, []);
  console.log(parksArray);

  if (!parksArray || loading)
    return (
      <div className="text-center">
        <h3 className="d-inline-block bg-warning bg-opacity-75 border border-dark rounded px-3 py-3">
          <u>
            <b>Loading...</b>
          </u>
        </h3>
      </div>
    );

  // The search function uses the api search by park code parameter in the url becuase there is not search by name in it.
  // First the function checks if input is empty. If it is, shows all parks on button click.
  // The function takes the input value as lower case, goes over allParks array to find the first park that includes the input
  // and then takes its' park code to use it as park code parameter to search by within the url.
  // If no park is valid for the input, changes parksArray to be empty.
  // This allows the return of the component show "No parks found" div instead of empty list.
  // If a park is found, fetches with new url and changes parksArray to have only the found park.
  const searchParkByName = async () => {
    const searchInput = document
      .getElementById("parkSearch")
      .value.toLowerCase();

    if (!searchInput) {
      setParksArray(allParks);
      return;
    }

    try {
      let parkCode;
      for (let i = 0; i < allParks.length; i++) {
        if (allParks[i].fullName.toLowerCase().includes(searchInput)) {
          parkCode = allParks[i].parkCode;
          break;
        }
      }

      if (!parkCode) {
        console.log("No parks found");
        setParksArray([]);
        return;
      }

      const searchUrl = `https://developer.nps.gov/api/v1/parks?limit=1&parkCode=${parkCode}&api_key=fqcD9ajfrQy8VHiZXiF15L4qgQ0r40KTsqmj39eP`;
      let response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      const result = await response.json();
      setParksArray(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="d-inline-block bg-light bg-opacity-75 border border-dark rounded px-3 py-3">
        <u>
          <b>National parks</b>
        </u>
      </h2>
      <br />
      <div className="d-inline-block bg-light bg-opacity-75 border border-dark rounded px-3 py-3 pb-3">
        <h5>Search for a park: </h5>
        <input type="text" id="parkSearch" className="pb-1" />
        <span> </span>
        <button className="btn btn-light btn-sm" onClick={searchParkByName}>
          Search
        </button>{" "}
      </div>
      <br />
      <br />
      {parksArray.length === 0 ? (
        <div className="text-center">
          <h6 className="d-inline-block bg-danger border border-dark rounded px-3 py-3 pb-3">
            No parks found
          </h6>
        </div>
      ) : (
        <div className="text-center">
          <h6 className="d-inline-block bg-light bg-opacity-75 border border-dark rounded px-3 py-3 pb-3">
            Click any park for more details!
          </h6>
          <br />
          {parksArray.map((park) => (
            <div
              key={park.id}
              className="d-inline-block bg-primary border border-dark rounded mx-3 my-3 px-3 py-3 vw-25"
            >
              <Link to={`${park.parkCode}`}>
                <h3 className="text-dark">
                  <u>{park.name}</u>
                </h3>
                <img
                  src={park.images[0].url}
                  alt={park.images[0].altText}
                  width="250"
                  height="200"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
