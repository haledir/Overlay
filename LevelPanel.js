Vue.component("level-panel", {
    props: ["level"],
    template: `
    <div class="time-panel gradient-box box-level">
      <div class="levelText texte">Level: {{ level }}</div>
    </div>
  `,
});