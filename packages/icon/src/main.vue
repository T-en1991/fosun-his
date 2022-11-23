<template>
  <i :class="'fs-icon-' + name"></i>
</template>

<script>
export default {
  name: 'FsIcon',

  props: {
    name: String
  }
};
</script>
