import { useState } from "react";
import Header from "../header/header";
import Garage from "../pages/garage-page/garage";
import Winners from "../pages/winners-page/winners";
import PageRoute from "../routing/pageRoute";
import { TAppState, TCarDataStatus } from "../../types/TAppState";

function App() {
  const [activeContent, setActiveContent] = useState(1);
  const [newCarName, setNewCarName] = useState("");
  const [newCarColor, setNewCarColor] = useState("#000000");
  const [selectedCar, setSelectedCar] = useState<TCarDataStatus | null>(null);
  const [editedCarName, setEditedCarName] = useState("");
  const [editedCarColor, setEditedCarColor] = useState("#000000");
  const [editedCarValueIsChanged, setEditedCarValueIsChanged] = useState(false);

  const appStatus: TAppState = {
    page: { activeContent, setActiveContent },
    createName: { newCarName, setNewCarName },
    createColor: { newCarColor, setNewCarColor },
    selected: { selectedCar, setSelectedCar },
    editName: { editedCarName, setEditedCarName },
    editColor: { editedCarColor, setEditedCarColor },
    editState: { editedCarValueIsChanged, setEditedCarValueIsChanged },
  };
  return (
    <>
      <Header />
      <PageRoute path="#garage">
        <Garage appState={appStatus} />
      </PageRoute>

      <PageRoute path="#winners">
        <Winners />
      </PageRoute>
    </>
  );
}

export default App;