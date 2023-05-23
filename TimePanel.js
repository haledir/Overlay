Vue.component("time-panel", {
    props: ["gTime"],
    template: `
    <div class="time-panel gradient-box box-time">
        <div class="timeHeader">Ingame time (4x speed)</div>
        <div class="timeText texte">{{ gTime.hours < 10 ? '0' + gTime.hours : gTime.hours }}:{{ gTime.minutes < 10 ? '0' + gTime.minutes : gTime.minutes }}:{{ gTime.seconds < 10 ? '0' + gTime.seconds : gTime.seconds }}</div>
    </div>
  `,
});