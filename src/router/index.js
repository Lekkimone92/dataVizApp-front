import Vue from 'vue'
import VueRouter from 'vue-router'
import DepartementComponent from '@/components/departementComponent/DepartementComponent';
import AsideDepartementListComponent from "../components/AsidedepartementListComponent/AsideDepartementListComponent";
import ChartVisualizationComponent from '@/components/chartVisualizationComponent/ChartVisualizationComponent';
import D3PackComponent from '@/components/d3PackComponent/D3PackComponent';
import D3RadialComponent from '@/components/d3RadialComponent/D3RadialComponent';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'departements',
    component: DepartementComponent
  },
  {
    path: '/map',
    name: 'map',
    component: AsideDepartementListComponent
  },
  {
    path: '/chartVisual',
    name: 'visuel-chart',
    component: ChartVisualizationComponent
  },{
    path: '/d3Pack',
    name: 'd3-pack',
    component: D3PackComponent
  },{
    path: '/d3Radial',
    name: 'd3-radial',
    component: D3RadialComponent
  },
];

const router = new VueRouter({
  routes
});

export default router
