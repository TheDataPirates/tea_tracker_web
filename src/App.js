import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Dashboard from "./containers/Dashboad/Dashboard";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <div>
            {/*<Switch>*/}
            {/*    <Route path='/dashboad' component={Dashboard}/>*/}
            {/*    <Route path='/' exact component={Auth}/>*/}
            {/*</Switch>*/}
            <Layout>
                <Dashboard/>
            </Layout>
        </div>
    );
}

export default App;
