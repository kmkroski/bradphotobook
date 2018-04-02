<template>
  <div class="content row justify-content-center align-items-center">
    <div class="col-12 col-sm-10 col-md-6">
      <h2>Home</h2>
      <hr>
      <p class="text-justify">
        This is the home page
      </p>
      <p class="text-justify">
        This is a static page.
      </p>
      <p class="text-justify">
        It doesn't change, nor does it need to change.
      </p>
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
  created() {
    document.title = this.$title;
  },
};
</script>
