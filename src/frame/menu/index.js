import './_menu.scss';
import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';

class Menu extends PureComponent {

    renderItem(item, index) {
        return (
            <a key={`menu_${index}`} href={`/#/${item.staticUrl}`}>{item.name}</a>
        )
    }

    render() {
        const {modules} = this.props;
        return (
            <div className={'side-menu'}>
                <h4>
                    Side Menu
                </h4>

                {
                    modules.map((module, index) => {
                        return this.renderItem(module, index);
                    })
                }
            </div>
        )
    }
}

const attach = (modules) => {
    ReactDom.render(<Menu modules={modules} />, document.getElementById('container-frame-menu'));
};

export default {
    attach
};