import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import AdminApp from '../components/Cpanel/AdminApp.vue'
import StudentMark from '../components/GetStudentMark.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/studentMark',
    name: 'studentMark',
    component: StudentMark,
    beforeEnter: (to, from, next) => {
      if (
        JSON.parse(localStorage.getItem('studentLoggedIn')) === false
      ) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Login
  },

  {
    path: '/eng-admin',
    name: 'eng-admin',
    component: AdminApp,
    children: [
      {
        path: '/eng-admin',
        name: 'eng-admin',
        component: () => import('../components/Cpanel/SectionEng.vue')
      },
      {
        path: 'communication',
        name: 'communication',
        component: () =>
          import('../components/Cpanel/Communication/CommunicationApp.vue'),
        children: [
          {
            path: '/',
            name: 'communication',
            component: () =>
              import('../components/Cpanel/Communication/ChosenGrade.vue')
          },
          {
            path: 'communication-archive',
            name: 'communication-archive',
            component: () =>
              import(
                '../components/Cpanel/Communication/Archive/archiveData.vue'
              )
          },
          {
            path: 'communication-admin',
            name: 'communication-admin',
            component: () =>
              import('../components/Cpanel/Communication/Admin/AddAdmin.vue')
          },
          // FIRST GRADE
          {
            path: 'g1-bolonya-sem1-xwly1',
            name: 'g1-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem1-xwly2',
            name: 'g1-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly1',
            name: 'g1-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly2',
            name: 'g1-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g1-years-xwly1',
            name: 'g1-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g1-years-xwly2',
            name: 'g1-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/Firstgrade/Years-xwly2.vue'
              )
          },
          // Second GRADE
          {
            path: 'g2-bolonya-sem1-xwly1',
            name: 'g2-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem1-xwly2',
            name: 'g2-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly1',
            name: 'g2-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly2',
            name: 'g2-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g2-years-xwly1',
            name: 'g2-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g2-years-xwly2',
            name: 'g2-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/SecondGrade/Years-xwly2.vue'
              )
          },
          // Third GRADE
          {
            path: 'g3-bolonya-sem1-xwly1',
            name: 'g3-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem1-xwly2',
            name: 'g3-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly1',
            name: 'g3-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly2',
            name: 'g3-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g3-years-xwly1',
            name: 'g3-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g3-years-xwly2',
            name: 'g3-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/ThirdGrade/Years-xwly2.vue'
              )
          },
          // FOURTH GRADE
          {
            path: 'g4-bolonya-sem1-xwly1',
            name: 'g4-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem1-xwly2',
            name: 'g4-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly1',
            name: 'g4-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly2',
            name: 'g4-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g4-years-xwly1',
            name: 'g4-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g4-years-xwly2',
            name: 'g4-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Communication/FourthGrade/Years-xwly2.vue'
              )
          }
        ],
        beforeEnter: (to, from, next) => {
          if (
            JSON.parse(localStorage.getItem('loggedInForCommunication')) ===
            false
          ) {
            next({ path: '/eng-admin' })
          } else {
            next()
          }
        }
      },
      // THIS IS FOR MECHANICAL
      {
        path: 'mechanical',
        name: 'mechanical',
        component: () =>
          import('../components/Cpanel/Mechanical/MechanicalApp.vue'),
        children: [
          {
            path: '/',
            name: 'mechanical',
            component: () =>
              import('../components/Cpanel/Mechanical/ChosenGrade.vue')
          },
          // FIRST GRADE
          {
            path: 'g1-bolonya-sem1-xwly1',
            name: 'g1-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem1-xwly2',
            name: 'g1-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly1',
            name: 'g1-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly2',
            name: 'g1-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g1-years-xwly1',
            name: 'g1-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g1-years-xwly2',
            name: 'g1-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/Firstgrade/Years-xwly2.vue'
              )
          },
          // Second GRADE
          {
            path: 'g2-bolonya-sem1-xwly1',
            name: 'g2-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem1-xwly2',
            name: 'g2-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly1',
            name: 'g2-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly2',
            name: 'g2-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g2-years-xwly1',
            name: 'g2-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g2-years-xwly2',
            name: 'g2-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/SecondGrade/Years-xwly2.vue'
              )
          },
          // Third GRADE
          {
            path: 'g3-bolonya-sem1-xwly1',
            name: 'g3-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem1-xwly2',
            name: 'g3-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly1',
            name: 'g3-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly2',
            name: 'g3-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g3-years-xwly1',
            name: 'g3-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g3-years-xwly2',
            name: 'g3-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/ThirdGrade/Years-xwly2.vue'
              )
          },
          // FOURTH GRADE
          {
            path: 'g4-bolonya-sem1-xwly1',
            name: 'g4-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem1-xwly2',
            name: 'g4-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly1',
            name: 'g4-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly2',
            name: 'g4-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g4-years-xwly1',
            name: 'g4-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g4-years-xwly2',
            name: 'g4-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Mechanical/FourthGrade/Years-xwly2.vue'
              )
          }
        ]
      },
      // THIS IS CITY PLANNING
      {
        path: 'city-planning',
        name: 'city-planning',
        component: () =>
          import('../components/Cpanel/CityPlanning/CityPlanningApp.vue'),
        children: [
          {
            path: '/',
            name: 'city-planning',
            component: () =>
              import('../components/Cpanel/CityPlanning/ChosenGrade.vue')
          },
          // FIRST GRADE
          {
            path: 'g1-bolonya-sem1-xwly1',
            name: 'g1-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem1-xwly2',
            name: 'g1-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly1',
            name: 'g1-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly2',
            name: 'g1-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g1-years-xwly1',
            name: 'g1-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g1-years-xwly2',
            name: 'g1-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/Firstgrade/Years-xwly2.vue'
              )
          },
          // Second GRADE
          {
            path: 'g2-bolonya-sem1-xwly1',
            name: 'g2-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem1-xwly2',
            name: 'g2-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly1',
            name: 'g2-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly2',
            name: 'g2-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g2-years-xwly1',
            name: 'g2-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g2-years-xwly2',
            name: 'g2-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/SecondGrade/Years-xwly2.vue'
              )
          },
          // Third GRADE
          {
            path: 'g3-bolonya-sem1-xwly1',
            name: 'g3-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem1-xwly2',
            name: 'g3-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly1',
            name: 'g3-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly2',
            name: 'g3-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g3-years-xwly1',
            name: 'g3-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g3-years-xwly2',
            name: 'g3-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/ThirdGrade/Years-xwly2.vue'
              )
          },
          // FOURTH GRADE
          {
            path: 'g4-bolonya-sem1-xwly1',
            name: 'g4-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem1-xwly2',
            name: 'g4-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly1',
            name: 'g4-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly2',
            name: 'g4-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g4-years-xwly1',
            name: 'g4-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g4-years-xwly2',
            name: 'g4-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/CityPlanning/FourthGrade/Years-xwly2.vue'
              )
          }
        ]
      },
      // THIS IS FOR OIL AND ENERGY
      {
        path: 'oil-and-energy',
        name: 'oil-and-energy',
        component: () =>
          import('../components/Cpanel/OilandEnergy/OilandEnergyApp.vue'),
        children: [
          {
            path: '/',
            name: 'oil-and-energy',
            component: () =>
              import('../components/Cpanel/OilandEnergy/ChosenGrade.vue')
          },
          // FIRST GRADE
          {
            path: 'g1-bolonya-sem1-xwly1',
            name: 'g1-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem1-xwly2',
            name: 'g1-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly1',
            name: 'g1-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly2',
            name: 'g1-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g1-years-xwly1',
            name: 'g1-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g1-years-xwly2',
            name: 'g1-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/Firstgrade/Years-xwly2.vue'
              )
          },
          // Second GRADE
          {
            path: 'g2-bolonya-sem1-xwly1',
            name: 'g2-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem1-xwly2',
            name: 'g2-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly1',
            name: 'g2-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly2',
            name: 'g2-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g2-years-xwly1',
            name: 'g2-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g2-years-xwly2',
            name: 'g2-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/SecondGrade/Years-xwly2.vue'
              )
          },
          // Third GRADE
          {
            path: 'g3-bolonya-sem1-xwly1',
            name: 'g3-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem1-xwly2',
            name: 'g3-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly1',
            name: 'g3-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly2',
            name: 'g3-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g3-years-xwly1',
            name: 'g3-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g3-years-xwly2',
            name: 'g3-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/ThirdGrade/Years-xwly2.vue'
              )
          },
          // FOURTH GRADE
          {
            path: 'g4-bolonya-sem1-xwly1',
            name: 'g4-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem1-xwly2',
            name: 'g4-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly1',
            name: 'g4-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly2',
            name: 'g4-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g4-years-xwly1',
            name: 'g4-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g4-years-xwly2',
            name: 'g4-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/OilandEnergy/FourthGrade/Years-xwly2.vue'
              )
          }
        ]
      },
      // THIS IS FOR ELECTRICAL
      {
        path: 'electrical',
        name: 'electrical',
        component: () =>
          import('../components/Cpanel/Electrical/ElectricalApp.vue'),
        children: [
          {
            path: '/',
            name: 'electrical',
            component: () =>
              import('../components/Cpanel/Electrical/ChosenGrade.vue')
          },
          // FIRST GRADE
          {
            path: 'g1-bolonya-sem1-xwly1',
            name: 'g1-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem1-xwly2',
            name: 'g1-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly1',
            name: 'g1-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g1-bolonya-sem2-xwly2',
            name: 'g1-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g1-years-xwly1',
            name: 'g1-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g1-years-xwly2',
            name: 'g1-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/Firstgrade/Years-xwly2.vue'
              )
          },
          // Second GRADE
          {
            path: 'g2-bolonya-sem1-xwly1',
            name: 'g2-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem1-xwly2',
            name: 'g2-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly1',
            name: 'g2-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g2-bolonya-sem2-xwly2',
            name: 'g2-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g2-years-xwly1',
            name: 'g2-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g2-years-xwly2',
            name: 'g2-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/SecondGrade/Years-xwly2.vue'
              )
          },
          // Third GRADE
          {
            path: 'g3-bolonya-sem1-xwly1',
            name: 'g3-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem1-xwly2',
            name: 'g3-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly1',
            name: 'g3-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g3-bolonya-sem2-xwly2',
            name: 'g3-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g3-years-xwly1',
            name: 'g3-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g3-years-xwly2',
            name: 'g3-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/ThirdGrade/Years-xwly2.vue'
              )
          },
          // FOURTH GRADE
          {
            path: 'g4-bolonya-sem1-xwly1',
            name: 'g4-bolonya-sem1-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Bolonya-sem1-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem1-xwly2',
            name: 'g4-bolonya-sem1-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Bolonya-sem1-xwly2.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly1',
            name: 'g4-bolonya-sem2-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Bolonya-sem2-xwly1.vue'
              )
          },
          {
            path: 'g4-bolonya-sem2-xwly2',
            name: 'g4-bolonya-sem2-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Bolonya-sem2-xwly2.vue'
              )
          },
          {
            path: 'g4-years-xwly1',
            name: 'g4-years-xwly1',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Years-xwly1.vue'
              )
          },
          {
            path: 'g4-years-xwly2',
            name: 'g4-years-xwly2',
            component: () =>
              import(
                '../components/Cpanel/Electrical/FourthGrade/Years-xwly2.vue'
              )
          }
        ]
      }
    ],
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('loggedInForEng')) === false) {
        next({ path: '/admin' })
      } else {
        next()
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
