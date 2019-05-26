import React, { ComponentType, Component } from 'react';
import { Route, Redirect, RouteType } from 'react-router-dom';
import { authGuard } from '../../auth/auth.guard';

export const PrivateRoute = <P extends object>({ Component, path }: { Component: ComponentType<P>, path: string }) => (
    <Route path={path} render={(props: any) => {
        return authGuard.isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
    }} />
)
