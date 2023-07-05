import { createStore } from 'vuex'
const apiUrl = 'https://ayabulelasityata.github.io/json-portfolio/data/data.json'

export default createStore({
  state: {
    education: null,
    projects: null,
    experience: null,
    skills: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setEducation(state, education){
      state.education = education
    },
    setProjects(state, projects){
      state.projects = projects
    },
    setExperience(state, experience){
      state.experience = experience
    },
    setSkills(state, skills){
      state.skills = skills
    },
    setTestimonials(state, testimonials){
      state.testimonials = testimonials
    }
  },
  actions: {
    async getEducation(context) {
      const res = await fetch(apiUrl)
      const {education} = await res.json()
      console.log(education);
      context.commit("setEducation", education)
          //  experiance
    },
    async getProjects(context) {
      const res = await fetch(apiUrl)
      const {projects} =  await res.json()
      context.commit("setProjects", projects)
    },
    async getExperience(context) {
      const res = await fetch(apiUrl)
      const {experience} = await res.json()
      context.commit("setExperience", experience)
    },
    async getSkills(context) {
      const res = await fetch(apiUrl)
      const {skills} = await res.json()
      context.commit("setSkills", skills)
    },
    async getTestimonials(context) {
      const res = await fetch(apiUrl)
      const {testimonials} = await res.json()
      context.commit("setTestimonials", testimonials)
    },
  },
  modules: {
  }
})