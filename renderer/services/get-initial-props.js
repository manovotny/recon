import {injectGlobal} from 'styled-components';
import reset from 'styled-reset';

export default ({store, isServer, pathname, res}) => {
    if (isServer) {
        const route = store.getState().route;

        if (route !== pathname) {
            res.writeHead(301, {
                Location: route
            });
            res.end();
        }

        // eslint-disable-next-line no-unused-expressions
        injectGlobal`
            /* stylelint-disable-next-line */
            ${reset}
            
            /* stylelint-disable selector-max-type */
            html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                line-height: 1.25;
            }
            /* stylelint-enable */
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }
        `;
    }

    return store;
};
