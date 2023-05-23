Vue.component("stats-panel", {
    props: ["stats"],
    methods: {
        getSpeed: function() {
            if (this.stats.value2.badge3.toString() !== 'true') {
                if(this.stats.value.statusCondition.toString() === 'PRZ') {
                    return Math.floor(this.stats.value.speed * 0.25);
                } else {
                    return this.stats.value.speed;
                }
            } else {
                if(this.stats.value.statusCondition.toString() === 'PRZ') {
                    return Math.floor(this.stats.value.speed * 1.125 * 0.25);
                } else {
                    return Math.floor(this.stats.value.speed * 1.125);
                }
            }
        },
        getAttack: function() {            
            if (this.stats.value2.badge1.toString() !== 'true') {
                if(this.stats.value.statusCondition.toString() === 'BRN') {
                    return Math.floor(this.stats.value.attack * 0.5);
                } else {
                    return this.stats.value.attack;
                }
            } else {
                if(this.stats.value.statusCondition.toString() === 'BRN') {
                    return Math.floor(this.stats.value.attack * 1.125 * 0.5);
                } else {
                    return Math.floor(this.stats.value.attack * 1.125);
                }
            }
        },
        getDefense: function() {
            if (this.stats.value2.badge6.toString() !== 'true') {
                return this.stats.value.defense;
            }
            return Math.floor(this.stats.value.defense * 1.125);
        },
        getSPA: function() {
            if (this.stats.value2.badge7.toString() !== 'true') {
                return this.stats.value.specialAttack;
            }
            return Math.floor(this.stats.value.specialAttack * 1.125);
        },
        getSPD: function() {
            if (this.stats.value2.badge7.toString() !== 'true') {
                return this.stats.value.specialDefense;
            }
            if (this.stats.value.specialDefense > 205 && this.stats.value.specialDefense < 433) {
                return this.stats.value.specialDefense;
            } else {
                return Math.floor(this.stats.value.specialDefense * 1.125);
            }
            
        }
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