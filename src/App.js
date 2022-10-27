import DataUtilization from "./ppt/DataUtilization/DataUtilization";
import FirstPage from "./ppt/FirstPage/FirstPage";
import HumanitiesEnvironment from "./ppt/HumanitiesEnvironment/HumanitiesEnvironment";
import NaturalEnvironment from "./ppt/NaturalEnvironment/NaturalEnvironment";
import OneSentense from "./ppt/OneSentense/OneSentense";
import RecommandTravelCourse from "./ppt/RecommandTravelCourse/RecommandTravelCourse";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <OneSentense />
      <NaturalEnvironment />
      <HumanitiesEnvironment />
      <RecommandTravelCourse />
      <DataUtilization />
    </div>
  );
}

export default App;
