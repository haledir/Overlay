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
                    value: "Grass",
                    value2: "Poison"
                },
                {
                    name: "Level",
                    value: this.mapper.properties.player.team[0].level
                },
                {
                    name: "Stats",
                    value: this.mapper.properties.player.team[0],
                    value2: this.mapper.properties.player.badges
                },
                {
                    name: "Attacks",
                    value: this.mapper.properties.player.team[0]
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