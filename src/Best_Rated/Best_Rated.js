import React from "react";
import Collection from "../Collection/Collection";

function Best_Rated() {
  return (
    <div>
      <Collection sorting="vote_average.desc"></Collection>
    </div>
  );
}

export default Best_Rated;
