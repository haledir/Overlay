Vue.component("attack-cell", {
    props: ["attack"],
    template: `
    <div class="attack-cell td-attacks-wrapper">
            <div class="type_icon rock">
                <img :src="'icons/rock.svg'"/>
            </div>
            <div class="td-attacks-attack cell-center">{{ attack.move }}</div>
            <table class="table-attack">
                <tr>
                    <td class="td-attacks-info cell-right">PWR:</td>
                    <td class="td-attacks-info cell-right">{{ attack.pwr }}</td>
                </tr>
                <tr>
                    <td class="td-attacks-info cell-right">PP:</td>
                    <td class="td-attacks-info cell-right">{{ attack.pp }}</td>
                </tr>
                <tr>
                    <td class="td-attacks-info cell-right">ACC:</td>
                    <td class="td-attacks-info cell-right">{{ attack.acc }}</td>
                </tr>
            </table>
        </div>
  `,
});