import React from "react";
import { giftsContext } from "../App";

const Grandson = () => {
    const value = React.useContext(giftsContext);

    return <h1>{value}</h1>;
};

export default Grandson;