import React from 'react';
import ProTyeps from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h1>
        {title}
        {poster}</h1>
}

Movie.protTypes = {
    id: ProTyeps.number.isRequired,
    year: ProTyeps.number.isRequired,
    title: ProTyeps.string.isRequired,
    summary: ProTyeps.string.isRequired,
    poster: ProTyeps.string.isRequired
};

export default Movie;