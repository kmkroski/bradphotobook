import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/templates/Home';
import Contents from '@/components/templates/Contents';
import Page from '@/components/templates/Page';

import tenYearsIn from '@/assets/intros/tenyearsin.txt';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/contents',
      component: Contents,
    },
    {
      path: '/samples',
      component: Page,
      meta: {
        title: 'Ten Years In',
        type: 'text',
        text: tenYearsIn,
      },
    },
    {
      path: '/samples/hori',
      component: Page,
      meta: {
        title: 'Horizontal',
        type: 'image',
        image: 'samples/hori.jpg',
        location: '41.8781° N, 87.6298° W',
        date: '12-31-2018 08:54 AM',
        settings: 'Some Focus',
      },
    },
    {
      path: '/samples/vert',
      component: Page,
      meta: {
        title: 'Vertical',
        type: 'image',
        image: 'samples/vert.jpg',
        location: '41.8781° N, 87.6298° W',
        date: '02-03-2004 03:45 PM',
        settings: 'Some Exposure',
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
