import React, { ComponentType, Component } from 'react';
import { Route, Redirect, RouteType } from 'react-router-dom';
import { authGuard } from '../../auth/auth.guard';

export const PrivateRoute = <P extends object>({ Component, ...rest }: { Component: ComponentType<any> }) => (
    <Route {...rest} render={(props: any) => {
        authGuard.isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
    }} />
)

// class PrivateRoute extends Component<any, any> {
//     render() {
//         return (
//             <Route {...rest} />
//         )
//     }
// }