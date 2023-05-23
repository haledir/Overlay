Vue.component("heldItem-panel", {
    props: ["hItem"],
    template: `
    <div class="heldItem-panel gradient-box box-heldItem">
        <div class="heldItemHeader">held item:</div>
        <div class="heldItemText texte">{{ hItem.toString() === null ? '-' : hItem.toString() }}</div>
    </div>
  `,
});