Vue.component("select-page", {
    props: ["selectData"],
    data() {
        return {
            color_background: "#000",
            color_text_moveset: "white",
            dt_height: "12px",
            pokemon: "Charizard",
            type1: "Fire",
            type2: "Flying",
            exp_rate_txt: "",
            exp_rate: 0,
            exp_rates: ["Fast", "Medium-Fast", "Medium-Slow", "Slow"],
            types: ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]
        }
    },
    methods: {
        selected: function() {
            this.exp_rate = this.exp_rates.indexOf(this.exp_rate_txt);
        },
        sendDataToParent: function() {
          this.$emit("custom-event", { ...this.$data });
        }
    },
    template: `
    <div class="select-page text-black">
        <h1> Selection Screen für nicht Coder ;) </h1>
        <p> Lass uns das hier schnell über die Bühne bringen, damit wir den Run starten können. </p>

        <p>
            <div>Hex-Wert für die Farbe der <b>Panels</b>: {{ color_background }}</div>
            <input v-model="color_background" placeholder="#000" />
        </p>
        <p>
            <div>Textfarbe des <b>Moveset</b>: {{ color_text_moveset }}</div>
            <select v-model="color_text_moveset">
                <option disabled value="">Please select one</option>
                <option>white</option>
                <option>black</option>
            </select>
        </p>
        <p>
            <div>Höhe der DataTable: {{ dt_height }}</div>
            <input v-model="dt_height" placeholder="#000" />
        </p>
        <p>
            <div>Welches <b>Pokemon</b>: {{ pokemon }}</div>
            <input v-model="pokemon" placeholder="Charizard" />
        </p>
        <p>
            <div v-if="type1 === ''">Type 1:</div>
            <div v-else >Type 1: <span :class="'pkmn-type ' + type1.toLowerCase()">{{ type1 }}</span></div>
            <select v-model="type1">
                <option disabled value="">Please select one</option>
                <option v-for="type in types" :values="type">{{ type }}</option>
            </select>
        </p>
        <p>
            <div v-if="type2 === ''">Type 2:</div>
            <div v-else >Type 2: <span :class="'pkmn-type ' + type2.toLowerCase()">{{ type2 }}</span></div>
            <select v-model="type2">
                <option disabled value="">Please select one</option>
                <option v-for="type in types" :values="type">{{ type }}</option>
            </select>
        </p>
        <p>
            <div>Exp. Group: {{ exp_rate_txt }} | Index: {{ exp_rate }}</div>
            <select v-model="exp_rate_txt" @change="selected">
                <option disabled value="">Please select one</option>
                <option v-for="rate in exp_rates" :values="rate">{{ rate }}</option>
            </select>
        </p>
        <button @click="sendDataToParent">Save</button>
    </div>
  `,
});