import React from "react";
import howManyParks from "./parks/howManyParks";
import MersaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RMFunctions);
  return (
    <div>
      <MersaVerde />
    </div>
  );
}

export default ColoradoStateParks;
