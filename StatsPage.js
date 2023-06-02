Vue.component("stats-page", {
    props: ["mapper"],
    data() {
      return {
        selection_done: false, // Beispielwert für die Auswahl
      };
    },
    computed: {
        statsData() {
            if (!this.mapper || !this.mapper.properties) {
                return [];
            }

            return [
                {
                    name: "Gametime",
                    value: this.mapper.properties.gameTime
                },
                {
                    name: "HeldItem",
                    value: this.mapper.properties.player.team[0].heldItem
                },
                {
                    name: "Species",
                    value: ""
                },
                {
                    name: "Type",
                    value: "Grass",
                    value2: "Electro"
                },
                {
                    name: "Level",
                    value: this.mapper.properties.player.team[0].level,
                    rate: 3,
                    all_rates: ["Fast", "Medium-Fast", "Medium-Slow", "Slow"],
                    xp_current: this.mapper.properties.player.team[0].expPoints
                },
                {
                    name: "Stats",
                    value: this.mapper.properties.player.team[0],
                    value2: this.mapper.properties.player.badges,
                    battle: this.mapper.properties.battle
                },
                {
                    name: "Attacks",
                    value: this.mapper.properties.player.team[0],
                    battle: this.mapper.properties.battle
                },
                {
                    name: "BattleMode",
                    value: this.mapper.properties.battle.mode
                },
                {
                    name: "Enemy0",
                    value: this.mapper.properties.battle.trainer.team[0],
                    slot: "enemy1",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "0" ? "enemy-highlight" : ""
                },
                {
                    name: "Enemy1",
                    value: this.mapper.properties.battle.trainer.team[1],
                    slot: "enemy2",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "1" ? "enemy-highlight" : ""
                },
                {
                    name: "Enemy2",
                    value: this.mapper.properties.battle.trainer.team[2],
                    slot: "enemy3",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "2" ? "enemy-highlight" : ""
                },
                {
                    name: "Enemy3",
                    value: this.mapper.properties.battle.trainer.team[3],
                    slot: "enemy4",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "3" ? "enemy-highlight" : ""
                },
                {
                    name: "Enemy4",
                    value: this.mapper.properties.battle.trainer.team[4],
                    slot: "enemy5",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "4" ? "enemy-highlight" : ""
                },
                {
                    name: "Enemy5",
                    value: this.mapper.properties.battle.trainer.team[5],
                    slot: "enemy6",
                    active: this.mapper.properties.battle.enemyPokemon.partyPos.toString() === "5" ? "enemy-highlight" : ""
                }
            ];
        }
    },
    methods: {
        displayValue(index) {
            return this.statsData[15].value.toString() === null ? '-' : this.statsData[index].value ;
        },
        handleCustomEvent: function(data) {
            this.selection_done = true;
            document.documentElement.style.setProperty('--color-background', data.color_background);
            document.documentElement.style.setProperty('--color-text-moveset', data.color_text_moveset);
            document.documentElement.style.setProperty('--dt-height', data.dt_height);
          
            // Aktualisiere alle Daten im statsData-Array
            this.statsData[3].value = data.type1;
            this.statsData[3].value2 = data.type2;
            this.statsData[2].value = data.pokemon;
            this.statsData[4].rate = data.exp_rate;
            console.log(this.statsData);
          }
    },
    template: `
    <div class="background">
        <select-page @custom-event="handleCustomEvent"></select-page>
        <time-panel :key="statsData[0].name" :gTime="statsData[0].value"></time-panel>
        <heldItem-panel :key="statsData[1].name" :hItem="statsData[1].value"></heldItem-panel>
        <pkmnImage-panel :key="statsData[2].name" :pkmn="statsData[2].value"></pkmnImage-panel>
        <type-panel :key="statsData[3].name" :type="statsData[3]"></type-panel>
        <level-panel :key="statsData[4].name" :levelData="statsData[4]"></level-panel>
        <stats-panel :key="statsData[5].name" :stats="statsData[5]"></stats-panel>
        <attack-panel :key="statsData[6].name" :attacks="statsData[6]"></attack-panel>
        <moveset-panel v-if="statsData[7].value.toString() !== 'Trainer'"></moveset-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[8].value.species.toString() !== null" :enemy="statsData[8]"></enemy-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[9].value.species.toString() !== null" :enemy="statsData[9]"></enemy-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[10].value.species.toString() !== null" :enemy="statsData[10]"></enemy-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[11].value.species.toString() !== null" :enemy="statsData[11]"></enemy-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[12].value.species.toString() !== null" :enemy="statsData[12]"></enemy-panel>
        <enemy-panel v-if="statsData[7].value.toString() === 'Trainer' && statsData[13].value.species.toString() !== null" :enemy="statsData[13]"></enemy-panel>
    </div>
    
  `,
});