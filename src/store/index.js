import { createStore } from 'vuex'
import axios from 'axios'
const apiUrl = 'https://ayabulelasityata.github.io/json-portfolio/data/data.json'

export default createStore({
  state: {
    education: null
  },
  getters: {
  },
  mutations: {
    setEducation(state, education){
      state.education = education
    }
  },
  actions: {
    async getEducation(context) {
      const res = await axios.get(apiUrl)
      const education = res.data.education
      context.commit("setEducation", education)      
    },
  },
  modules: {
  }
})