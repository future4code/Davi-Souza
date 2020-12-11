import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AdminPage from '../Pages/AdminPage'
import ErrorPage from '../Pages/ErrorPage'
import LoginPage from '../Pages/LoginPage'
import NewTripPage from '../Pages/NewTripPage'
import TripDetailsPage from '../Pages/TripDetailsPage'
import TripListPage from '../Pages/TripListPage'
import TripSubscribePage from '../Pages/TripSubscribePage'

function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/admin">
                    <AdminPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/trip/new">
                    <NewTripPage/>
                </Route>

                <Route exact path="/trip/details">
                    <TripDetailsPage/>
                </Route>

                <Route exact path="/trip/list">
                    <TripListPage/>
                </Route>

                <Route exact path="/trip/subscribe">
                    <TripSubscribePage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router
