import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/pages/personal'
import Company1 from '@/pages/company_1'
import MedicalPC from '@/pages/medical-pc'
import MedicalMobile from '@/pages/medical-mobile'
import MedicalManagement from '@/pages/medical-management'
import HesMobile from '@/pages/hes-mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/company1',
      name: 'Company1',
      component: Company1
    },
    {
      path: '/medical-pc',
      name: 'MedicalPC',
      component: MedicalPC
    },
    {
      path: '/medical-mobile',
      name: 'MedicalMobile',
      component: MedicalMobile
    },
    {
      path: '/medical-management',
      name: 'MedicalManagement',
      component: MedicalManagement
    },
    {
      path: '/hes-mobile',
      name: 'HesMobile',
      component: HesMobile
    }
  ]
})
