import Navigo from 'navigo';

const routes = [];

class ExtendedRouter extends Navigo {
    on(route) {
        if (routes.indexOf(route) >= 0) {
            console.write(`Route ${route} already exists!`);
            return this;
        }
        routes.push(route);
        return super.on.apply(this, arguments);
    }
}

let root = null,
    useHash = true,
    hash = '#';

let extendedRouter = new ExtendedRouter(root, useHash, hash);

export default extendedRouter;