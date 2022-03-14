import { createApp } from 'vue';
import Dashboard from './components/dashboard';

// Mount function to startup the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// if we are in dev env or isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}
//we are running through container
//and we shoud import the mount function

export { mount };
