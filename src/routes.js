import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList"
import Student from "./components/Student/Student"

export default (
    <Switch>
        <Route Component={Home} exact path="/" />
        <Route Component={About} path="/about" />
        <Route component={ClassList} path="/classlist/:class" />
        <Route component={Student} path="/student/:id" />
    </Switch>
);
