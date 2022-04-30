<template>
  <div class="example">
    <editor
      api-key="iemeabef8wd5xrn97yjmofw74d9ejsw3haok6tgmtw71qmtj"
      :init="{ plugins: 'wordcount' }"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    Editor,
  },
};
</script>
