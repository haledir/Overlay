Vue.component("pkmnImage-panel", {
    props: ["pkmn"],
    methods: {
        getPkmnImagePath: function() {
            return "images/" + this.pkmn.toString() + ".png";
        }
    },
    template:` 
    <div class="pkmnImage-panel box-pkmn-image">
        <img class="pkmn-image" :src="getPkmnImagePath()">
    </div>
  `,
});