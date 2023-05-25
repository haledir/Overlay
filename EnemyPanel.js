Vue.component("enemy-panel", {
    props: ["enemy"],
    methods: {
        getPkmnImagePath: function() {
            return "images/" + this.enemy.value.species.toString() + ".png";
        }
    },
    template: `
    <div class="enemy-panel gradient-box box-enemy texte" v-bind:class="enemy.slot + ' ' + enemy.active" :style="{ opacity: enemy.value.hp.toString() === '0' ? 0.4 : 1 }">
        <div class="table-enemy grid-horizontal-container">
            <div class="col-img grid-vertical-container">
                <div class="cell-image"><img :src="getPkmnImagePath()" width="105px" height="105px" alt="pokemon image"></div>
                <div class="cell-species cell-center">Lv: {{ enemy.value.level }}</div>
            </div>
            <div class="col-stats grid-vertical-container">
                <div class="cell-species cell-center">{{ enemy.value.species }}</div>
                <table width="275px">
                    <tr>
                        <td class="cell-stats-enemy cell-center cell-atk">{{ enemy.value.attack }}</td>
                        <td class="cell-stats-enemy cell-center cell-def">{{ enemy.value.defense }}</td>
                        <td class="cell-stats-enemy cell-center cell-spa">{{ enemy.value.specialAttack }}</td>
                        <td class="cell-stats-enemy cell-center cell-spd">{{ enemy.value.specialDefense }}</td>
                        <td class="cell-stats-enemy cell-center cell-spe">{{ enemy.value.speed }}</td>
                    </tr>
                </table>
                <table width="275px">
                    <tr>
                        <td class="cell-center">{{ enemy.value.move1 }}</td>
                        <td class="cell-center">{{ enemy.value.move2.toString() === null ? '-' : enemy.value.move2.toString() }}</td>
                    </tr>
                    <tr>
                        <td class="cell-center">{{ enemy.value.move3.toString() === null ? '-' : enemy.value.move3.toString() }}</td>
                        <td class="cell-center">{{ enemy.value.move4.toString() === null ? '-' : enemy.value.move4.toString() }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  `,
});