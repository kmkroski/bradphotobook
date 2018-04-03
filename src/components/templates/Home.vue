<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 m-auto">
          <div class="text-block">
            <h3>Intro</h3>
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
  created() {
    document.title = this.$title;
  },
};
</script>
