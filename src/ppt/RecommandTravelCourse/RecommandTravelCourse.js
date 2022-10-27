import MalinD from "./MalinD/MalinD";
import Moom from "./Moom/Moom";
import Nairobi from "./Nairobi/Nairobi";
import Nakuru from "./Nakuru/Nakuru";
import './RecommandTravelCourse.scss';

function RecommandTravelCourse() {
    return (
        <div className="rec-trav-course">
            <Moom />
            <Nakuru />
            <Nairobi />
            <MalinD />
        </div>
    )
}

export default RecommandTravelCourse;