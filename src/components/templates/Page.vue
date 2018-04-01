<template>
  <div class="area-content">

    <div v-if="content.type == 'image'"
      class="d-flex justify-content-center align-items-center h-100">

      <figure class="figure mb-0">
        <img class="figure-img img-fluid"
          :alt="content.title"
          :src="'/static/images/' + content.image">
        <figcaption class="figure-caption">
          <div class="d-flex justify-content-between small">
            <div class="text-left">
              {{ content.location }}
            </div>
            <div class="text-center">
              {{ content.date }}
            </div>
            <div class="text-right">
              {{ content.settings }}
            </div>
          </div>
        </figcaption>
      </figure>

    </div>

    <div v-if="content.type == 'text'"
      class="row justify-content-center align-items-center h-100">

      <div class="col-12 col-sm-10 col-md-6">
        <h3>{{ content.title }}</h3>
        <hr>
        <div class="text-justify" :inner-html.prop="content.text | markdown"></div>
      </div>

    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  data() {
    return {
      content: {},
    };
  },
  created() {
    this.content = this.findMetaByRoute(this.$route.path);

    const routePaths = this.$route.path.split('/').filter(el => el);
    const runningTitles = [];
    let runningPath = '';
    for (let i = 0; i < routePaths.length; i += 1) {
      runningPath = `${runningPath}/${routePaths[i]}`;
      runningTitles.push(this.findMetaByRoute(runningPath).title);
    }

    document.title = `${runningTitles.reverse().join(' | ')} | ${this.$title}`;
  },
  filters: {
    markdown(text) {
      return marked(text, { sanitize: true });
    },
  },
  methods: {
    findMetaByRoute(path) {
      const page = this.$router.options.routes.filter(el => el.path === path);
      return page[0].meta;
    },
  },
};
</script>

<style scoped>
  .figure {
    max-height: 100%;
  }
  .figure > .figure-img {
    max-width: 100%;
    max-height: calc(100vh - 8rem - 0.5rem - 17px);
    height: auto;
    width: auto;
  }
</style>
