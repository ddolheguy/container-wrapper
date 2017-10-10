import createReactApp from './createReactApp';

const buildModules = (modules = [], router) => {
    const reactModules = modules.filter(module => module.buildType === 'react');

    if (reactModules.length > 0) {
        createReactApp(reactModules, router);
    }
};

export default {
    buildModules
};