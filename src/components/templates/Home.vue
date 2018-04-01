<template>
  <div class="area-content row justify-content-center align-items-center h-100">
    <div class="col-12 col-sm-8 col-md-6">
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
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$title;
  },
};
</script>
