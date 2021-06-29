import React, { useEffect} from "react";

function MoreInfo() {
  useEffect(
    () => {
      fetch("data.json")
        .then(res => res.json())
        .then(data => {
          console.log("data", data)
        })
    },
    []
  )

  return (
    <div className="show-article">
      <div className="etiqueta">

        <div className="etiqueta__datos">
          <span>MoreInfo</span>

        </div>

      </div>
    </div>
  );

}

export default MoreInfo;

