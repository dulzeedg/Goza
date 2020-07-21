import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import Home from './components/Home';
import Layout from './Layouts/Layouts';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';

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
                <Route
                    component={Stack}
                    path="/stack" 
                />
                <Route
                    component={Projects}
                    path="/projects" 
                />
            </Switch>
        </Layout>
    )
}