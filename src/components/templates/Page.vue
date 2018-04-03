<template>
  <main>

    <div v-if="content.type == 'image'">
      <div class="width-contain">
        <div class="photo">
          <img :src="'/static/photos/' + content.image" :alt="content.title">
        </div>
        <div class="details">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md date-time">2013/07/18 7:26pm</div>
              <div class="col-md photo-metadata">48mm f/16 1/10th 50 ISO</div>
              <div class="col-md gps-location">43°32’1” N 109°37’55” W</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="content.type == 'text'" class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 m-auto">
          <div class="text-block" :inner-html.prop="content.text">
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
  methods: {
    findMetaByRoute(path) {
      const page = this.$router.options.routes.filter(el => el.path === path);
      return page[0].meta;
    },
  },
};
</script>

<style>
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
