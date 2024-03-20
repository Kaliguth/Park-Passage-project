import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ParkDetails() {
  const parkCode = useParams().parkCode;
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);
  const parkUrl = `https://developer.nps.gov/api/v1/parks?limit=1&parkCode=${parkCode}&api_key=fqcD9ajfrQy8VHiZXiF15L4qgQ0r40KTsqmj39eP`;

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        let response = await fetch(parkUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch API data");
        }

        const result = await response.json();
        setPark(result.data);
      } catch (error) {
        console.error(error);
        setPark([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, [parkCode, parkUrl]);
  console.log(park);

  if (!park || loading)
    return (
      <div className="text-center">
        <h3 className="d-inline-block bg-warning bg-opacity-75 border border-dark rounded px-3 py-3">
          <u>
            <b>Loading...</b>
          </u>
        </h3>
      </div>
    );

  return (
    <div className="text-center">
      {park.length === 0 ? (
        <div className="text-center">
          <h6 className="d-inline-block bg-danger border border-dark rounded px-3 py-3 pb-3">
            Park not found!
          </h6>
        </div>
      ) : (
        <div>
          <h3 className="d-inline-block bg-light bg-opacity-75 border border-dark rounded px-3 py-3">
            <u>
              <b>{park[0].fullName}</b>
            </u>
          </h3>
          <br />
          <br />
          <div className="d-inline-block align-middle bg-primary bg-opacity-75 border border-dark rounded mx-3 my-3 px-3 py-3 w-75">
            {park[0].designation && park[0].description ? (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Description</u>
                  </b>
                </h5>
                <h6>
                  <b>{park[0].designation}</b>
                </h6>
                <p>
                  <b>{park[0].description}</b>
                </p>
              </div>
            ) : (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Description</u>
                  </b>
                </h5>
                <p>
                  <b>No description available</b>
                </p>
              </div>
            )}
            <br />
            {park[0].states && park[0].addresses.length > 0 ? (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Location and address</u>
                  </b>
                </h5>
                <p>
                  <b>{park[0].states}, US</b>
                </p>
                <p>
                  <b>{park[0].addresses[0].line1}</b>
                </p>
              </div>
            ) : (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Location and address</u>
                  </b>
                </h5>
                <p>
                  <b>No location information available</b>
                </p>
              </div>
            )}
            <br />
            {park[0].activities && park[0].activities.length > 0 ? (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>Activities:</b>
                </h5>
                {park[0].activities.map((activity) => (
                  <p key={activity.id} className="d-inline-block px-5">
                    <b>{activity.name}</b>
                  </p>
                ))}
              </div>
            ) : (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>Activities:</b>
                </h5>
                <p>
                  <b>No activity information available</b>
                </p>
              </div>
            )}
            <br />
            {park[0].operatingHours &&
            park[0].operatingHours.length > 0 &&
            park[0].operatingHours[0].standardHours ? (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Operating hours</u>
                  </b>
                </h5>
                <h5>
                  <u>Recent updates:</u>
                </h5>
                <p>
                  <b>{park[0].operatingHours[0].description}</b>
                </p>
                <h5>
                  <u>Standard hours:</u>
                </h5>
                <p>
                  <b>
                    Sunday: {park[0].operatingHours[0].standardHours.sunday}
                    <br />
                    Monday: {park[0].operatingHours[0].standardHours.monday}
                    <br />
                    Tuesday: {park[0].operatingHours[0].standardHours.tuesday}
                    <br />
                    wednesday:{" "}
                    {park[0].operatingHours[0].standardHours.wednesday}
                    <br />
                    Thursday: {park[0].operatingHours[0].standardHours.thursday}
                    <br />
                    Friday: {park[0].operatingHours[0].standardHours.friday}
                    <br />
                    Saturday: {park[0].operatingHours[0].standardHours.saturday}
                  </b>
                </p>
              </div>
            ) : (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Operating hours</u>
                  </b>
                </h5>
                <p>
                  <b>No operating hours information available</b>
                </p>
              </div>
            )}
            <br />
            {park[0].contacts &&
            park[0].contacts.emailAddresses &&
            park[0].contacts.emailAddresses.length > 0 &&
            park[0].contacts.phoneNumbers &&
            park[0].contacts.phoneNumbers.length > 0 ? (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Contact information</u>
                  </b>
                </h5>
                <p>
                  <b>
                    Email: {park[0].contacts.emailAddresses[0].emailAddress}
                  </b>
                </p>
                <p>
                  <b>
                    Phone number: {park[0].contacts.phoneNumbers[0].phoneNumber}
                  </b>
                </p>
              </div>
            ) : (
              <div className="bg-light bg-opacity-75 rounded py-2 px-2">
                <h5>
                  <b>
                    <u>Contact information</u>
                  </b>
                </h5>
                <p>
                  <b>No contact information available</b>
                </p>
              </div>
            )}
            <br />
            <br />
            {park[0].images && park[0].images.length > 0 && (
              <div>
                {park[0].images.map((img) => (
                  <div
                    key={img.url}
                    className="d-inline-block align-middle bg-light bg-opacity-75 border border-dark rounded mx-3 my-3 w-25"
                  >
                    <p>
                      <b>{img.title}</b>
                    </p>
                    <img
                      src={img.url}
                      alt={img.altText}
                      height="150"
                      width="150"
                    />
                    <p>
                      <b>Credit: {img.credit}</b>
                    </p>
                  </div>
                ))}
              </div>
            )}
            <br />
            {park[0].url && (
              <div>
                <Link to={park[0].url}>
                  <button type="button" className="btn btn-dark">
                    <b>{park[0].name} website</b>
                  </button>
                </Link>
              </div>
            )}
          </div>
          <br />
          <br />
          <Link to="/parks">
            <button className="btn btn-light btn-lg">
              <b>Back to parks page</b>
            </button>
          </Link>
        </div>
      )}
      ;
    </div>
  );
}
