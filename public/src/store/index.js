import Vuex from 'vuex';

export const state = () => ({
  isDragging: false,
  temporaryPage: null,
  isTemporaryPageOpen: false,
  isSourceCodePageOpen: false,
  sourceCodeDownloadRequested: false
})

// COMMIT
export const mutations = {
  setIsDragging(state, value) {
    state.isDragging = value;
  },
  setTemporaryPage(state, info) {
    state.temporaryPage = info;
  },
  clearTemporaryPage(state) {
    state.temporaryPage = null;
  },
  setTemporaryPageOpen(state, value) {
    state.isTemporaryPageOpen = value;
  },
  setSourceCodePageOpen(state, value) {
    state.isSourceCodePageOpen = value;
  },
  setSourceCodeDownloadRequested(state, value) {
    state.sourceCodeDownloadRequested = value;
  }
}

// DISPATCH
export const actions = {
  createTemporaryPage(vuexContext, object) {
    vuexContext.commit('setTemporaryPage', object);
    vuexContext.commit('setTemporaryPageOpen', true);
  },
  createSourceCodePage(vuexContext, object) {
    vuexContext.commit('setTemporaryPage', object);
    vuexContext.commit('setSourceCodePageOpen', true);
  },
  downloadSourceCode(vuexContext, object) {
    vuexContext.commit('setTemporaryPage', object);
    vuexContext.commit('setSourceCodeDownloadRequested', true);
  }
}

// GETTERS
export const getters = {
  isDragging(state) {
    return state.isDragging;
  },
  isTemporaryPageOpen(state) {
    return state.isTemporaryPageOpen;
  },
  isSourceCodePageOpen(state) {
    return state.isSourceCodePageOpen;
  },
  isSourceCodeDownloadRequested(state) {
    return state.sourceCodeDownloadRequested;
  }
}
