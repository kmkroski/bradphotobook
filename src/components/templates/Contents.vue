<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 m-auto">
          <div class="text-block">
            <h3>Contents</h3>
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
        </div>
      </div>
    </div>

    <footer-block :next="next" :previous="previous"/>
  </main>
</template>

<script>
import FooterBlock from '@/components/blocks/FooterBlock';

export default {
  components: {
    FooterBlock,
  },
  props: {
    previous: String,
    next: String,
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
