import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import "./Crew.scss";
import { IMAGE_URL } from "../../../services/movieService";

const Crew = () => {
  const movie = useSelector((state) => state.movies.movie);
  const [credits] = useState(movie[1]);

  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {credits.crew.map((data) => (
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
                <td>{data.department}</td>
                <td>{data.job}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

Crew.propTypes = {
  movie: PropTypes.array,
};

export default Crew;
