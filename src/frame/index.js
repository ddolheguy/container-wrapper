import './_frame.scss';
import builder from '../builders';
import menu from './menu';
import router from '../router';

const configureModules = (modules = []) => {

    menu.attach(modules);
    builder.buildModules(modules, router);

    router.resolve();
};

export default {
    configureModules
};