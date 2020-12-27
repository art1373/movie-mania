import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import "./Overview.scss";
import { IMAGE_URL } from "../../../services/movieService";
import { numberFormatter } from "../../../utils/utils";

const Overview = () => {
  const movie = useSelector((state) => state.movies.movie);
  const [items, setItems] = useState([]);
  const [details] = useState(movie[0]);
  const [credits] = useState(movie[1]);

  useEffect(() => {
    if (details && credits) {
      const detailItems = [
        {
          id: 0,
          name: "Tagline",
          value: `${details.tagline}`,
        },
        {
          id: 1,
          name: "Budget",
          value: `${numberFormatter(details.budget, 1)}`,
        },
        {
          id: 2,
          name: "Revenue",
          value: `${numberFormatter(details.revenue, 1)}`,
        },
        {
          id: 3,
          name: "Status",
          value: `${details.status}`,
        },
        {
          id: 4,
          name: "Release Date",
          value: `${details && details.release_date}`,
        },
        {
          id: 5,
          name: "Run Time",
          value: `${details && details.runtime} min`,
        },
      ];
      setItems(detailItems);
    }

    // eslint-disable-next-line
  }, [details, credits]);

  return (
    <>
      {details && credits && (
        <div className="overview">
          <div className="overview-column-1">
            <div className="description">{details.overview}</div>

            <div className="cast">
              <div className="div-title">Cast</div>
              <table>
                {credits.cast.map((data) => (
                  <tbody key={uuidv4()}>
                    <tr>
                      <td>
                        <img
                          src={
                            data.profile_path
                              ? `${IMAGE_URL}${data.profile_path}`
                              : "http://placehold.it/54x81"
                          }
                          alt=""
                        />
                      </td>
                      <td>{data.name}</td>
                      <td>{data.character}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div className="overview-column-2">
            <div className="overview-detail">
              <h6>Production Companies</h6>
              {details.production_companies.map((prod) => (
                <div className="product-company" key={uuidv4()}>
                  <img
                    src={
                      prod.logo_path
                        ? `${IMAGE_URL}${prod.logo_path}`
                        : "http://placehold.it/30x30"
                    }
                    alt=""
                  />
                  <span>{prod.name}</span>
                </div>
              ))}
            </div>
            <div className="overview-detail">
              <h6>Language(s)</h6>
              <p>
                {details.spoken_languages.map((language) => (
                  <a href="!#" key={language.name}>
                    {language.name}
                  </a>
                ))}
              </p>
            </div>
            {details &&
              credits &&
              items.map((data) => (
                <div className="overview-detail" key={data.id}>
                  <h6>{data.name}</h6>
                  <p>
                    <a href="!#">{data.value}</a>
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

Overview.propTypes = {
  movie: PropTypes.array,
};

export default Overview;
