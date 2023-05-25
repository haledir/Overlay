Vue.component("level-panel", {
    props: ["levelData"],
    data: function () {
      return {
        exp_lvl: 0,
        exp_needed_lvl: 0
      };
    },
    methods: {
      getXP: function () {
          var result = 0;
          var lvl_current = parseInt(this.levelData.value);
          var lvl_next = lvl_current + 1;
          var xp_needed_current = 0;
          var xp_needed_next = 0;
          var xp_current = parseInt(this.levelData.xp_current.toString());
          var xp_this_level_needed = 0;
          var xp_this_level = 0;

          if (this.levelData.rate === 0) {
            xp_needed_current = 0.8 * Math.pow(lvl_current, 2);
            xp_needed_next = 0.8 * Math.pow(lvl_next, 2);
          } else if (this.levelData.rate === 1) {
            xp_needed_current = Math.pow(lvl_current, 3);
            xp_needed_next = Math.pow(lvl_next, 3);
          } else if(this.levelData.rate === 2) {
            xp_needed_current = (1.2 * Math.pow(lvl_current, 3)) - (15 * Math.pow(lvl_current, 2)) + (100 * lvl_current) - 140;
            xp_needed_next = (1.2 * Math.pow(lvl_next, 3)) - (15 * Math.pow(lvl_next, 2)) + (100 * lvl_next) - 140;
          } else {
            xp_needed_current = 1.25 * Math.pow(lvl_current, 3);
            xp_needed_next = 1.25 * Math.pow(lvl_next, 3);
          }

          xp_this_level_needed = xp_needed_next - xp_needed_current;
          xp_this_level = xp_current - xp_needed_current;
          result = (xp_this_level / xp_this_level_needed) * 100;
          this.exp_lvl = Math.floor(xp_this_level);
          this.exp_needed_lvl = Math.floor(xp_this_level_needed);
          return result;
      }
    },
    template: `
    <div class="time-panel gradient-box box-level">
      <div class="levelText texte">Level: {{ levelData.value }}</div>
      <div class="xp-bar-container">
        <div class="xp-bar-caption texte"> {{ exp_lvl }} / {{ exp_needed_lvl }} </div>
        <progress class="xp-bar" :value="getXP()" max="100"></progress>
      </div>
    </div>
  `,
});