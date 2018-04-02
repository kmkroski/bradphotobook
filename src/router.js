import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/templates/Home';
import Contents from '@/components/templates/Contents';
import Page from '@/components/templates/Page';

import placesIntro from '@/assets/intros/places.md';

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
      path: '/places',
      component: Page,
      meta: {
        title: 'Places',
        type: 'text',
        text: placesIntro,
      },
    },
    {
      path: '/places/dog',
      component: Page,
      meta: {
        title: 'Dog',
        type: 'image',
        image: 'places/dog.jpg',
        location: '41.8781° N, 87.6298° W',
        date: '12-31-2018 08:54 AM',
        settings: 'Some Focus',
      },
    },
    {
      path: '/places/larry',
      component: Page,
      meta: {
        title: 'Sky',
        type: 'image',
        image: 'places/larry.jpg',
        location: '41.8781° N, 87.6298° W',
        date: '02-03-2004 03:45 PM',
        settings: 'Some Exposure',
      },
    },
    {
      path: '/places/worf',
      component: Page,
      meta: {
        title: 'Worf',
        type: 'image',
        image: 'places/worf.jpg',
        location: 'Forcas III, QG Gamma Sector',
        date: '47391.2.45',
        settings: 'Some Transporter',
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
