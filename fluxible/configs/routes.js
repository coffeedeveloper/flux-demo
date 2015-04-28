import Home from '../components/Home';
import About from '../components/About';

export default {
  home: {
    path: '/',
    method: 'get',
    handle: Home,
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', {
        pageTitle: 'home'
      });
      done();
    }
  },
  about: {
    path: '/about',
    method: 'get',
    handle: About,
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', {
        pageTitle: 'about'
      });
      done();
    }
  }
};
