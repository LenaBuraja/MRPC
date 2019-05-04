import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login'
import signin from '../components/Signin'
import employees from '../components/Employees/ListEmployees'
import candidates from '../components/Candidates/ListCandidates'
import users from '../components/Users/ListUsers'
import detailsCandidate from '../components/Candidates/DetailsCandidate'
import detailsEmployee from '../components/Employees/DetailsEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: employees
    },
    {
      path: '/Employees',
      name: 'Employees',
      component: employees
    },
    {
      path: '/Candidates',
      name: 'Candidates',
      component: candidates
    },
    {
      path: '/Users',
      name: 'Users',
      component: users
    },
    {
      path: '/Login',
      name: 'Login',
      component: login
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: signin
    },
    {
      path: '/DetailsCandidate/:id',
      name: 'DetailsCandidate',
      component: detailsCandidate
    },
    {
      path: '/DetailsEmployee/:id',
      name: 'DetailsEmployee',
      component: detailsEmployee
    }
  ]
})
