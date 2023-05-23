Vue.component("stats-panel", {
    props: ["stats"],
    methods: {
        getSpeed: function() {
            var result = this.stats.value.speed;
            if (this.stats.value2.badge3.toString() === 'true') {
                result = Math.floor(this.stats.value.speed * 1.125);
            }
            if(this.stats.value.statusCondition.toString() === 'PRZ') {
                result = Math.floor(result * 0.25);
            }

            return result * this.getMod(this.stats.battle.yourPokemon.modStageSpeed);
    
        },
        getAttack: function() {
            var result = this.stats.value.attack;

            if (this.stats.value2.badge1.toString() == 'true') {
                result = Math.floor(this.stats.value.attack * 1.125);
            }
            if (this.stats.value.statusCondition.toString() === 'BRN') {
                result = Math.floor(result * 0.5);
            }
            
            return result * this.getMod(this.stats.battle.yourPokemon.modStageAttack);
        },
        getDefense: function() {
            var result = this.stats.value.defense;
            if (this.stats.value2.badge6.toString() === 'true') {
                result = Math.floor(this.stats.value.defense * 1.125);
            } 

            return result * this.getMod(this.stats.battle.yourPokemon.modStageDefense);
        },
        getSPA: function() {
            var result = this.stats.value.specialAttack;

            if (this.stats.value2.badge7.toString() === 'true') {
                result = Math.floor(this.stats.value.specialAttack * 1.125);
            }

            return result * this.getMod(this.stats.battle.yourPokemon.modStageSpecialAttack);
        },
        getSPD: function() {
            var result = this.stats.value.specialDefense;
            if (this.stats.value2.badge7.toString() === 'true') {
                result = Math.floor(this.stats.value.specialDefense * 1.125);
            }            
            if (this.stats.value.specialDefense > 205 && this.stats.value.specialDefense < 433) {
                result = this.stats.value.specialDefense;
            }

            return result * this.getMod(this.stats.battle.yourPokemon.modStageSpecialDefense);
        },        
        getMod: function(modifier) {
            if (this.stats.battle.mode.toString() === null) {
                return 1;
            }
            const modDict = new Object();
            modDict[6] = 4;
            modDict[5] = 350 / 100;
            modDict[4] = 3;
            modDict[3] = 250 / 100;
            modDict[2] = 2;
            modDict[1] = 150 / 100;
            modDict[0] = 1;
            modDict[-1] = 66 / 100;
            modDict[-2] = 50 / 100;
            modDict[-3] = 40 / 100;
            modDict[-4] = 33 / 100;
            modDict[-5] = 28 / 100;
            modDict[-6] = 25 / 100;
            
            return modDict[modifier];
          },
    },
    template: `
    <div class="time-panel gradient-box box-stats">
        <table class="table-stats texte">
            <tr>
                <td class="td-stats">HP:</td>
                <td class="td-stats-value">{{ stats.value.hp }}</td>
                <td class="td-stats">SPA:</td>
                <td class="td-stats-value">{{ getSPA() }}</td>
            </tr>
            <tr>
                <td class="td-stats">ATK:</td>
                <td class="td-stats-value">{{ getAttack() }}</td>
                <td class="td-stats">SPD:</td>
                <td class="td-stats-value">{{ getSPD() }}</td>
            </tr>
            <tr>
                <td class="td-stats">DEF:</td>
                <td class="td-stats-value">{{ getDefense() }}</td>
                <td class="td-stats">SPE:</td>
                <td class="td-stats-value">{{ getSpeed() }}</td>
            </tr>
        </table>
        <div class="stat-hp"></div>
        <div class="stat-atk"></div>
        <div class="stat-def"></div>
        <div class="stat-spa"></div>
        <div class="stat-spd"></div>
        <div class="stat-spe"></div>
    </div>
  `,
});