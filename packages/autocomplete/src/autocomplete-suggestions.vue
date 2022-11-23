<template>
  <transition name="fs-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="fs-autocomplete-suggestion fs-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <fs-scrollbar
        tag="ul"
        wrap-class="fs-autocomplete-suggestion__wrap"
        view-class="fs-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="fs-icon-loading"></i></li>
        <slot v-fsse>
        </slot>
      </fs-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'fosun-his/src/utils/vue-popper';
  import Emitter from 'fosun-his/src/mixins/emitter';
  import FsScrollbar from 'fosun-his/packages/scrollbar';

  export default {
    components: { FsScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'FsAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('FsAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.fs-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
