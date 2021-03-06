import { BaseStore } from 'fluxible/addons';

class ApplicationStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.pageTitle = '';
  }
  updatePageTitle (payload) {
    this.pageTitle = payload.pageTitle;
    this.emitChange();
  }
  getPageTitle () {
    return this.pageTitle;
  }
  getState () {
    return {
      pageTitle: this.pageTitle
    };
  }
  dehydrate () {
    return this.getState();
  }
  rehydrate (state) {
    this.pageTitle = state.pageTitle;
  }
}

ApplicationStore.storeName = 'ApplicationStore';
ApplicationStore.handles = {
  'UPDATE_PAGE_TITLE': 'updatePageTitle'
};

export default ApplicationStore;
