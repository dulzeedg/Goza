import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import Home from './components/Home';
import Layout from './Layouts/Layouts';
import About from './components/About';

export default function Routes() {
    return (
        <Layout>
            <Switch>
                <Route 
                component={Home}
                path="/" 
                />
                <Route
                    component={About}
                    path="/about" 
                />
            </Switch>
        </Layout>
    )
}