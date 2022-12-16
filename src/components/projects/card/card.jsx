import React, { useState } from "react";

const Card = ({ classes, elements }) => {

    return (
        <div className={classes.card}>
            <img
                src={elements.cover}
                className={classes.cover}
            />
        </div>
    );
}

export default Card;