import React from 'react';
import ReactDom from 'react-dom';

const registerReactModule = (app, router) => {
    if (app.staticUrl) {
        registerReactRoute(app, router);
    }
};

const registerReactRoute = (route, router) => {
    let {staticUrl} = route, resolveResponse = {};
    router
        .on(staticUrl.substr(1), params => {
            const data = Object.assign({}, params, resolveResponse);
            ReactDom.render(
                <route.component params={data} />,
                document.getElementById('container-contents')
            );
        }, {
            before: (done, params) => {
                // if (!document.getElementById('container-contents')) {
                //     const reactContainer = document.createElement('div');
                //     reactContainer.id = 'container-contents';
                //     document.querySelector('container-frame').appendChild(reactContainer);
                // }

                if (route.resolve && typeof route.resolve === 'function') {
                    route.resolve(params).then(
                        data => {
                            resolveResponse = data;
                            done();
                        }
                    )
                } else {
                    done();
                }
            }
        });
};

const createReactApp = (apps = [], router) => {
    apps.forEach(app => {
        registerReactModule(app, router);
    });
};

export default createReactApp;