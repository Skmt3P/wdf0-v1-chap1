import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const firestore = firebase.firestore()

if (process.browser) {
  const settings = {
    timestampsInSnapshots: true
  }
  firestore.settings(settings)
}

// const usersCollection = firestore.collection('users')
const postsCollection = firestore
  .collection('posts')
  .orderBy('createdAt', 'desc')
// const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      // user: null,
      // users: [],
      post: null,
      posts: [],
      isLoaded: false
    },
    getters: {
      posts: state => {
        return state.posts.map(post => {
          return post
        })
      },
      post: state => {
        const post = state.post
        if (!post) return null
        return post
      },
      isLoaded: state => state.isLoaded
    },
    mutations: {
      savePost(state, { post }) {
        state.post = post
      },
      setIsLoaded(state, next) {
        state.isLoaded = !!next
      },
      ...firebaseMutations
    },
    actions: {
      async INIT_SINGLE({ commit }, { id }) {
        console.log({
          commit
        })
        const snapshot = await firestore
          .collection('posts')
          .doc(id)
          .get()
        commit('savePost', { post: snapshot.data() })
      },
      INIT_POSTS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('posts', postsCollection)
      }),
      loadComplete({ commit }) {
        commit('setIsLoaded', true)
      }
    }
  })
}

export default createStore
