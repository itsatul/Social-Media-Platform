/*------------------------------------------------------------------------------
This snippet targets folders beginning with numbered prefixes, and applies full
color formatting based on the root colors listed below. The prefixes are both
customizable and extensible; feel free to change, add, and remove them based on
your own titles and vault structure! By default I have a range of 8+1 colors,
however I've provided some other common colors as a starting point for your own
customization. Just swap out the color variable names in the prefix groups.
------------------------------------------------------------------------------*/

// --------------------------------- IMPORTS -------------------------------- //

import './App.css'

import Router from './Routes'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {api} from './config'
import {login, logout} from './store/slice/user'

// --------------------------------- MAIN FUNCTION -------------------------------- //
function App() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user.accessToken);
    const Details = useSelector(state => state.user.Details)

    useEffect(() => {
        // console.log("calling the token ...");
        const localToken = localStorage.getItem("accessToken");
        // console.error(localToken);
        if (localToken) {
            async function ValidateToken(token) {
                // console.log("Token 1 step");
                try {
                    const res = await api.post("auth/token/verify/", {
                        token: token,
                    });
                    // console.log("Token 2step", res);
                    dispatch(login(token));
                    // console.error(Details);

                } catch (error) {
                    dispatch(logout());
                }
            }

            ValidateToken(localToken);
        } else {
            console.log("0 tokens");
            dispatch(logout());
        }
    }, []);

//-------------RETURN-------------//
    if (accessToken === undefined) {
        return <>Loading.....</>;
    } else {
        return <Router/>;
    }
}

// --------------------------------- EXPORTS -------------------------------- //
export default App
