<template>
  <div class="content row justify-content-center align-items-center">
    <div class="col-12 col-sm-10 col-md-6">
      <h2>Table of Contents</h2>
      <hr>

      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/content">Contents</router-link></li>
        <li>
          <router-link to="/places">Places</router-link>
          <ul>
            <li><router-link to="/places/dog">Dog</router-link></li>
            <li><router-link to="/places/larry">Larry</router-link></li>
            <li><router-link to="/places/worf">Worf</router-link></li>
          </ul>
        </li>
      </ul>

    </div>

    <footer-block/>
  </div>
</template>

<script>
import FooterBlock from '@/components/blocks/FooterBlock';

export default {
  components: {
    FooterBlock,
  },
  data() {
    return {
      routes: {},
    };
  },
  created() {
    document.title = `Contents | ${this.$title}`;
  },
};
</script>
