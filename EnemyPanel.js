Vue.component("enemy-panel", {
    props: ["enemy"],
    methods: {
        getPkmnImagePath: function() {
            return "images/" + this.enemy.value.species.toString() + ".png";
        }
    },
    template: `
    <div class="enemy-panel gradient-box box-enemy texte" v-bind:class="enemy.slot + ' ' + enemy.active" :style="{ opacity: enemy.value.hp.toString() === '0' ? 0.4 : 1 }">
        <table class="table-enemy" >
            <tr>
                <td colspan="3" rowspan="2" class="cell-image"><img :src="getPkmnImagePath()" width="75px" height="75px" alt="pokemon image"></td>
                <td colspan="2" class="cell-species cell-center"> Lv: {{ enemy.value.level }}</td>
                <td colspan="3" class="cell-species cell-center">{{ enemy.value.species }}</td>
            </tr>
            <tr>
                <td class="cell-center cell-atk">{{ enemy.value.attack }}</td>
                <td class="cell-center cell-def">{{ enemy.value.defense }}</td>
                <td class="cell-center cell-spa">{{ enemy.value.specialAttack }}</td>
                <td class="cell-center cell-spd">{{ enemy.value.specialDefense }}</td>
                <td class="cell-center cell-spe">{{ enemy.value.speed }}</td>
            </tr>
            <tr>
                <td class="cell-center" colspan="4">{{ enemy.value.move1 }}</td>
                <td class="cell-center" colspan="4">{{ enemy.value.move2.toString() === null ? '-' : enemy.value.move2.toString() }}</td>
            </tr>
            <tr>
                <td class="cell-center" colspan="4">{{ enemy.value.move3.toString() === null ? '-' : enemy.value.move3.toString() }}</td>
                <td class="cell-center" colspan="4">{{ enemy.value.move4.toString() === null ? '-' : enemy.value.move4.toString() }}</td>
            </tr>
        </table>
    </div>
  `,
});