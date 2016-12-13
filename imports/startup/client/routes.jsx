import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import AppLayout from "/imports/ui/layouts/App.jsx";

import HomePage from "/imports/ui/pages/Home.jsx";
import BatchesIndexPage from "/imports/ui/pages/Batches/Index.jsx";
import BatchesCreatePage from "/imports/ui/pages/Batches/Create.jsx";
import BatchesTrashPage from "/imports/ui/pages/Batches/Trash.jsx";
import BatchesShowPage from "/imports/ui/pages/Batches/Show.jsx";
import SpiritsIndexPage from "/imports/ui/pages/Spirits/Index.jsx";
import SpiritsCreatePage from "/imports/ui/pages/Spirits/Create.jsx";
import SpiritsTrashPage from "/imports/ui/pages/Spirits/Trash.jsx";
import SpiritsShowPage from "/imports/ui/pages/Spirits/Show.jsx";
import NotFoundPage from "/imports/ui/pages/NotFound.jsx";

export const routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppLayout}>
            <IndexRoute component={HomePage}/>

            <Route path="batches" component={BatchesIndexPage}/>
            <Route path="batches/create" component={BatchesCreatePage}/>
            <Route path="batches/trash" component={BatchesTrashPage}/>
            <Route path="batches/:id" component={BatchesShowPage}/>

            <Route path="spirits" component={SpiritsIndexPage}/>
            <Route path="spirits/create" component={SpiritsCreatePage}/>
            <Route path="spirits/trash" component={SpiritsTrashPage}/>
            <Route path="spirits/:id" component={SpiritsShowPage}/>

            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);