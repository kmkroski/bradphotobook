import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/templates/Home';
import Contents from '@/components/templates/Contents';
import AboutMe from '@/components/templates/AboutMe';
import Page from '@/components/templates/Page';

import tenYearsIn from '@/assets/intros/tenyearsin.txt';
import day1of3653 from '@/assets/intros/day1of3653.txt';
import people from '@/assets/intros/people.txt';
import places from '@/assets/intros/places.txt';
import instantFilm from '@/assets/intros/instantfilm.txt';
import end from '@/assets/intros/end.txt';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/01/toc',
      component: Contents,
    },
    {
      path: '/02/aboutme',
      component: AboutMe,
    },
    {
      path: '/03/tenyearsin',
      component: Page,
      meta: {
        title: 'Ten Years In',
        type: 'text',
        text: tenYearsIn,
      },
    },
    {
      path: '/04/day1of3653',
      component: Page,
      meta: {
        title: 'Day 1 of 3653',
        type: 'text',
        text: day1of3653,
      },
    },
    {
      path: '/05/day1of3653/photo',
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
      path: '/06/places',
      component: Page,
      meta: {
        title: 'Places',
        type: 'text',
        text: places,
      },
    },
    {
      path: '/07/places/',
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
      path: '/38/people',
      component: Page,
      meta: {
        title: 'People',
        type: 'text',
        text: people,
      },
    },
    {
      path: '/62/instantfilm',
      component: Page,
      meta: {
        title: 'Instant Film',
        type: 'text',
        text: instantFilm,
      },
    },
    {
      path: '/80/endnotes',
      component: Page,
      meta: {
        title: 'End Notes',
        type: 'text',
        text: end,
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
