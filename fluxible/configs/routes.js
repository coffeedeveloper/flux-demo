import Home from '../components/Home';
import About from '../components/About';
import Editor from '../components/Editor';

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
  },
  editor: {
    path: '/editor',
    method: 'get',
    handle: Editor,
    action: (context, payload, done) => {
      context.dispatch('UPDATE_PAGE_TITLE', {
        pageTitle: 'editor'
      });
      done();
    }
  }
};
