<template>
  <div id="app">
    <navbar-block/>

    <div class="container-fluid area d-flex">
      <div class="side-link-container align-self-center">
        <router-link class="side-link text-white bg-secondary" v-if="previous" :to="previous">
          &larr;
        </router-link>
      </div>

      <div class="area-expand">
        <transition name="fade">
          <router-view :key="$route.fullPath"/>
        </transition>
      </div>

      <div class="side-link-container align-self-center">
        <router-link class="side-link text-white bg-secondary" v-if="next" :to="next">
          &rarr;
        </router-link>
      </div>
    </div>

    <footer-block/>
  </div>
</template>

<script>
import NavbarBlock from '@/components/blocks/NavbarBlock';
import FooterBlock from '@/components/blocks/FooterBlock';

export default {
  name: 'App',
  components: {
    NavbarBlock,
    FooterBlock,
  },
  data() {
    return {
      previous: null,
      next: null,
    };
  },
  created() {
    this.handlePagination();

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 37 && this.previous) {
        this.$router.push(this.previous);
      } else if (e.keyCode === 39 && this.next) {
        this.$router.push(this.next);
      }
    });
  },
  watch: {
    $route() {
      this.handlePagination();
    },
  },
  methods: {
    handlePagination() {
      this.previous = null;
      this.next = null;

      Object.keys(this.$router.options.routes).forEach((key) => {
        const index = parseInt(key, 10);

        if (this.$router.options.routes[index].path === this.$route.path) {
          if (index !== 0) {
            this.previous = this.$router.options.routes[index - 1].path;
          }

          if (index !== this.$router.options.routes.length - 2) {
            this.next = this.$router.options.routes[index + 1].path;
          }
        }
      });
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.333s;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.fade-leave,
.fade-enter-to {
  opacity: 1;
}

html, body {
  height: 100%;
}
#app {
  min-height: 100%;
  padding-top: 5rem;
}

.area { height: calc(100vh - 8rem); }
.area-expand {
  position: relative;
  flex: auto;
}
.area-content {
  position: absolute;
  top: 0; bottom: 0;
  left: 1rem; right: 1rem;
}

.side-link-container {
  display: block;
  width: 30px; height: 30px;
}
.side-link {
  display: block;
  width: 30px; height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}
</style>
