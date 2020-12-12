import React,{useEffect,Suspense} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Dashboard from "./containers/Dashboad/Dashboard";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Report from "./containers/Report/Report";
import Supplier from "./containers/Supplier/Supplier";
import Machine from "./containers/Machine/Machine";
import User from "./containers/Users/Users";


const App = (props) => {
    // const { onTryAutoSignup } = props;
    //
    // useEffect(() => {
    //     onTryAutoSignup();
    // }, [onTryAutoSignup]);
    //
    // let routes = (
    //     <Switch>
    //         <Route path="/auth" render={props => <Auth {...props} />} />
    //         <Route path="/" exact component={Dashboard} />
    //         <Redirect to="/" />
    //     </Switch>
    // );
    //
    // if (props.isAuthenticated) {
    //     routes = (
    //         <Switch>
    //             <Route path="/users" render={props => <Users {...props} />} />
    //             <Route path="/machine" render={props => <Machine {...props} />} />
    //             <Route path="/suppliers" render={props => <Supplier {...props} />} />
    //             <Route path="/reports" render={props => < Report{...props} />} />
    //             {/*<Route path="/logout" component={Logout} />*/}
    //             <Route path="/auth" render={props => <Auth {...props} />} />
    //             <Route path="/" exact component={Dashboard} />
    //             <Redirect to="/" />
    //         </Switch>
    //     );
    // }

    return (
        <div>
            <Layout>
                {/*<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>*/}
                <Switch>
                    <Route path="/users" render={props => <User {...props} />} />
                    <Route path="/machines" render={props => <Machine {...props} />} />
                    <Route path="/suppliers" render={props => <Supplier {...props} />} />
                    <Route path="/reports" render={props => < Report{...props} />} />
                    {/*<Route path="/logout" component={Logout} />*/}
                    <Route path="/auth" render={props => <Auth {...props} />} />
                    <Route path="/" exact component={Dashboard} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
