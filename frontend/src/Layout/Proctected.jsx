import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedElement() {
    const IsLoggedIN = useSelector((state) => state.user.accessToken);
    if (IsLoggedIN) {
        return <Outlet/>;
    } else {
        return <Navigate to="/Login"/>;
    }
}