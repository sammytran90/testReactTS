import React, { ComponentType, Component } from 'react';
import { Route, Redirect, RouteType } from 'react-router-dom';
import { authGuard } from '../../auth/auth.guard';

export const PrivateRoute = ({ component, ...rest }: { component: ComponentType<any> }) => (
    <Route {...rest} render={(props: any) => {
        authGuard.isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
    }} />
)

// interface PrivateRouteProps {
//     Component: ComponentType,
//     path: string
// }

// class PrivateRoute extends Component<PrivateRouteProps> {
//     constructor(props: PrivateRouteProps) {
//         super(props)
//     }
//     render() {
//         return (
//             <Route path={this.props.path} render={(props: any) => {
//                 authGuard.isAuthenticated ? <Component {...props}></Component> : <Redirect to='/' />
//             }} />
//         )
//     }
// }

// export default PrivateRoute;