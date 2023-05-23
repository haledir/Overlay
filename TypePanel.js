Vue.component("type-panel", {
  props: ["type"],
  template: `
    <div class="type-panel gradient-box box-type">
      <span class="texte pkmn-type" v-bind:class="'type-' + type.value.toLowerCase()">{{ type.value }}</span>&nbsp;
      <span v-if="type.value2" class="texte pkmn-type" v-bind:class="'type-' + type.value2.toLowerCase()">{{ type.value2 }}</span>
    </div>
  `,
});