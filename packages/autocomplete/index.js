import ElAutocomplete from './src/main.vue';

/* istanbul ignore next */
ElAutocomplete.install = function(Vue) {
  Vue.component(ElAutocomplete.name, ElAutocomplete);
};

export default ElAutocomplete;
