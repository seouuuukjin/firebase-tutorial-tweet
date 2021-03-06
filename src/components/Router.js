import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth"
import Home from "../routes/Home"
//import Profile from "../routes/Profile"
//import EditProfile from "../routes/EditProfile"

const AppRouter =  ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? ( 
                    <>
                        <Route exact path = "/">
                            <Home />
                        </Route>
                    </>
                ) : (
                    <Route>
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;