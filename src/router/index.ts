import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/Signin.vue'
import ListEmployees from '../components/Employees/ListEmployees.vue'
import ListCandidates from '../components/Candidates/ListCandidates.vue'
import ListUsers from '../components/Users/ListUsers.vue'
import DetailsCandidate from '../components/Candidates/DetailsCandidate.vue'
import DetailsEmployee from '../components/Employees/DetailsEmployee.vue'
import NewPerson from '../components/People/AddPerson.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: ListEmployees
    },
    {
      path: '/Employees',
      name: 'Employees',
      component: ListEmployees
    },
    {
      path: '/Candidates',
      name: 'Candidates',
      component: ListCandidates
    },
    {
      path: '/Users',
      name: 'Users',
      component: ListUsers
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/DetailsCandidate/:id',
      name: 'DetailsCandidate',
      component: DetailsCandidate
    },
    {
      path: '/DetailsEmployee/:id',
      name: 'DetailsEmployee',
      component: DetailsEmployee
    },
    {
      path: '/NewPerson',
      name: 'NewPerson',
      component: NewPerson
    }
  ]
})
