Vue.component("moveset-panel", {
    props: ["moveset"],
    template: `
    <div class="moveset-panel gradient-box box-moveset">
    <div class="box-moveset-header texte">Moveset</div>
    <div class="box-moveset-table">
        <table class="data-table">
        <thead>
        <tr>
            <th class="sorting sorting-asc" data-sort="int" data-sort-dir="asc">
                <div class="sortwrap">Lv.</div>
            </th>
            <th class="sorting" data-sort="string">
                <div class="sortwrap">Move</div>
            </th>
            <th class="sorting" data-sort="string">
                <div class="sortwrap">Type</div>
            </th>
            <th class="sorting" data-sort="int" data-blanks="1">
                <div class="sortwrap">Power</div>
            </th>
            <th class="sorting" data-sort="int" data-blanks="1">
                <div class="sortwrap">Acc.</div>
            </th>
        </tr>
        </thead>
        <tbody>
   <tr>
      <td class="cell-num">1</td>
      <td class="cell-name"><a class="ent-name" href="/move/growl" title="View details for Growl">Growl</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num">1</td>
      <td class="cell-name"><a class="ent-name" href="/move/leech-seed" title="View details for Leech Seed">Leech Seed</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">90</td>
   </tr>
   <tr>
      <td class="cell-num">1</td>
      <td class="cell-name"><a class="ent-name" href="/move/tackle" title="View details for Tackle">Tackle</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">35</td>
      <td class="cell-num">95</td>
   </tr>
   <tr>
      <td class="cell-num">1</td>
      <td class="cell-name"><a class="ent-name" href="/move/vine-whip" title="View details for Vine Whip">Vine Whip</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">35</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num">4</td>
      <td class="cell-name"><a class="ent-name" href="/move/growl" title="View details for Growl">Growl</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num">7</td>
      <td class="cell-name"><a class="ent-name" href="/move/leech-seed" title="View details for Leech Seed">Leech Seed</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">90</td>
   </tr>
   <tr>
      <td class="cell-num">10</td>
      <td class="cell-name"><a class="ent-name" href="/move/vine-whip" title="View details for Vine Whip">Vine Whip</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">35</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num">15</td>
      <td class="cell-name"><a class="ent-name" href="/move/poison-powder" title="View details for PoisonPowder">PoisonPowder</a></td>
      <td class="cell-icon"><a class="type-icon type-poison" href="/type/poison">Poison</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">75</td>
   </tr>
   <tr>
      <td class="cell-num">15</td>
      <td class="cell-name"><a class="ent-name" href="/move/sleep-powder" title="View details for Sleep Powder">Sleep Powder</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">75</td>
   </tr>
   <tr>
      <td class="cell-num">22</td>
      <td class="cell-name"><a class="ent-name" href="/move/razor-leaf" title="View details for Razor Leaf">Razor Leaf</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">55</td>
      <td class="cell-num">95</td>
   </tr>
   <tr>
      <td class="cell-num">29</td>
      <td class="cell-name"><a class="ent-name" href="/move/sweet-scent" title="View details for Sweet Scent">Sweet Scent</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num">41</td>
      <td class="cell-name"><a class="ent-name" href="/move/growth" title="View details for Growth">Growth</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num">53</td>
      <td class="cell-name"><a class="ent-name" href="/move/synthesis" title="View details for Synthesis">Synthesis</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num">65</td>
      <td class="cell-name"><a class="ent-name" href="/move/solar-beam" title="View details for SolarBeam">SolarBeam</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">120</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm02" title="TM02">TM02</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/headbutt" title="View details for Headbutt">Headbutt</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">70</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm03" title="TM03">TM03</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/curse" title="View details for Curse">Curse</a></td>
      <td class="cell-icon"><span class="type-icon type-curse">???</span></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm05" title="TM05">TM05</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/roar" title="View details for Roar">Roar</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm06" title="TM06">TM06</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/toxic" title="View details for Toxic">Toxic</a></td>
      <td class="cell-icon"><a class="type-icon type-poison" href="/type/poison">Poison</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">85</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm10" title="TM10">TM10</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/hidden-power" title="View details for Hidden Power">Hidden Power</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">60</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm11" title="TM11">TM11</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/sunny-day" title="View details for Sunny Day">Sunny Day</a></td>
      <td class="cell-icon"><a class="type-icon type-fire" href="/type/fire">Fire</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm12" title="TM12">TM12</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/sweet-scent" title="View details for Sweet Scent">Sweet Scent</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm13" title="TM13">TM13</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/snore" title="View details for Snore">Snore</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">40</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm15" title="TM15">TM15</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/hyper-beam" title="View details for Hyper Beam">Hyper Beam</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">150</td>
      <td class="cell-num">90</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm17" title="TM17">TM17</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/protect" title="View details for Protect">Protect</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm19" title="TM19">TM19</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/giga-drain" title="View details for Giga Drain">Giga Drain</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">60</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm20" title="TM20">TM20</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/endure" title="View details for Endure">Endure</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm21" title="TM21">TM21</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/frustration" title="View details for Frustration">Frustration</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm22" title="TM22">TM22</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/solar-beam" title="View details for SolarBeam">SolarBeam</a></td>
      <td class="cell-icon"><a class="type-icon type-grass" href="/type/grass">Grass</a></td>
      <td class="cell-num">120</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm27" title="TM27">TM27</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/return" title="View details for Return">Return</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm31" title="TM31">TM31</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/mud-slap" title="View details for Mud-Slap">Mud-Slap</a></td>
      <td class="cell-icon"><a class="type-icon type-ground" href="/type/ground">Ground</a></td>
      <td class="cell-num">20</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm32" title="TM32">TM32</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/double-team" title="View details for Double Team">Double Team</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm34" title="TM34">TM34</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/swagger" title="View details for Swagger">Swagger</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">90</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm35" title="TM35">TM35</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/sleep-talk" title="View details for Sleep Talk">Sleep Talk</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm40" title="TM40">TM40</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/defense-curl" title="View details for Defense Curl">Defense Curl</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm44" title="TM44">TM44</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/rest" title="View details for Rest">Rest</a></td>
      <td class="cell-icon"><a class="type-icon type-psychic" href="/type/psychic">Psychic</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">-</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm45" title="TM45">TM45</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/attract" title="View details for Attract">Attract</a></td>
      <td class="cell-icon"><a class="type-icon type-normal" href="/type/normal">Normal</a></td>
      <td class="cell-num">-</td>
      <td class="cell-num">100</td>
   </tr>
   <tr>
      <td class="cell-num"><a href="/item/tm49" title="TM49">TM49</a></td>
      <td class="cell-name"><a class="ent-name" href="/move/fury-cutter" title="View details for Fury Cutter">Fury Cutter</a></td>
      <td class="cell-icon"><a class="type-icon type-bug" href="/type/bug">Bug</a></td>
      <td class="cell-num">10</td>
      <td class="cell-num">95</td>
   </tr>
</tbody>
        </table>
    </div>
    </div>
  `,
});