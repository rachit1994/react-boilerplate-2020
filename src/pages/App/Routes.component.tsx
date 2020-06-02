import React, { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Lazy from 'components/Lazy/Lazy.component';
import Sidebar from 'pages/Jobs/listing/listing-sidebar/ListingSidebar.component';
import NotFound from 'pages/NotFoundPage/NotFoundPage.component';

const JobPage = lazy(() => import('pages/Jobs/listing/Jobs.component'));

const Routes: FC<{}> = () => (
    <Lazy>
        <Switch>
            <Route path='/jobs' component={JobPage} />
            <Route path='/sidebar' component={Sidebar} />
            <Route component={NotFound} />
        </Switch>
    </Lazy>
);

export default Routes;
