export const authGuard = {
    isAuthenticated: false,
    authenticate(cb?: Function) {
        this.isAuthenticated = true;
        if (cb) setTimeout(cb, 100);
    },
    signOut(cb?: Function) {
        this.isAuthenticated = false;
        if (cb) setTimeout(cb, 100)
    }
}