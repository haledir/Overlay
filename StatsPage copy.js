Vue.component("stats-page", {
    props: ["mapper"],
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
                    value: this.mapper.properties.player.team[0].species
                },
                {
                    name: "Type",
                    value: "Water",
                    value2: "Fairy"
                },
                {
                    name: "Level",
                    value: this.mapper.properties.player.team[0].level
                },
                {
                    name: "Stats",
                    value: this.mapper.properties.player.team[0]
                },
                {
                    name: "Attacks",
                    value: this.mapper.properties.player.team[0]
                },
                {
                    name: "Enemy0",
                    value: this.mapper.properties.battle.trainer.team[0].hp
                },
                {
                    name: "BattleMode",
                    value: this.mapper.properties.battle.mode
                }
            ];
        }
    },
    methods: {
        displayValue(index) {
            return this.statsData[15].value.toString() === null ? '-' : this.statsData[index].value ;
        }
    },
    template: `
    <div class="background">
        <time-panel :key="statsData[0].name" :gTime="statsData[0].value"></time-panel>
        <heldItem-panel :key="statsData[1].name" :hItem="statsData[1].value"></heldItem-panel>
        <pkmnImage-panel :key="statsData[2].name" :pkmn="statsData[2].value"></pkmnImage-panel>
        <type-panel :key="statsData[3].name" :type="statsData[3]"></type-panel>
        <level-panel :key="statsData[4].name" :level="statsData[4].value"></level-panel>
        <stats-panel :key="statsData[5].name" :stats="statsData[5]"></stats-panel>
        <attack-panel :key="statsData[6].name" :attacks="statsData[6]"></attack-panel>
    </div>
  `,
});