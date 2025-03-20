import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/campersSlice";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/camperOps";

const CamperPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const camper = useSelector(selectCamper);

    useEffect(() => {
        dispatch(fetchCamperById(id));
    });

    if (!camper) return <p>Camper not found</p>;

    return <p>{JSON.stringify(camper)}</p>;
}

export default CamperPage;
