import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Auth from '../src/components/Auth/Auth';
import Dashboad from "./components/Dashboad/Dashboad";

const App = () => {
    return (
        <div>
            <Layout>
            <Switch>
                <Route path='/dashboad' component={Dashboad}/>
                <Route path='/' exact component={Auth}/>

            </Switch>
            </Layout>

        </div>
    );
}

export default App;
