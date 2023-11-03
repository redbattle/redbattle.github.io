import Vue from 'vue'
import RbH5FloatBtn from '../../components/FloatBtn/index';

export default async ({ Vue }) => {
  if (typeof process === 'undefined') { 
    Vue.use(RbH5FloatBtn);
  }
};