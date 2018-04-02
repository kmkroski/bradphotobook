<template>
  <div id="app">
    <navbar-block/>

    <div class="container-fluid area">
      <router-link class="side-link left text-white bg-secondary" v-if="previous" :to="previous">
        &larr;
      </router-link>

      <transition name="fade">
        <router-view :key="$route.fullPath"/>
      </transition>

      <router-link class="side-link right text-white bg-secondary" v-if="next" :to="next">
        &rarr;
      </router-link>
    </div>
  </div>
</template>

<script>
import NavbarBlock from '@/components/blocks/NavbarBlock';

export default {
  name: 'App',
  components: {
    NavbarBlock,
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
#app {
  padding-top: 5rem;
}

.area {
  position: relative;
  padding: 0 50px;
}
.content {
  position: absolute;
  top: 0; left: 50px; right: 50px;
  min-height: calc(100vh - 5rem);
  padding-bottom: 2rem;
}

.side-link {
  position: fixed;
  top: 50%; margin-top: -15px;
  display: block;
  width: 30px; height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}
.side-link.left { left: 10px; }
.side-link.right { right: 10px; }

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
</style>
