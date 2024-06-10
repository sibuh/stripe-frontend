
import React from "react";

const Error = (prop) => {
    return ( 
        <div className="error">
            <h2>{prop.errMsg}</h2>
        </div>
     );
}
 
export default Error;