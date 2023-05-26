Vue.component("attack-panel", {
    props: ["attacks"],
    data() {
        return {
            hashtable: null
        };
    },
    created() {
        this.hashtable = this.attacksHashtable();
    },
    methods: {
        attacksHashtable: function() {
          const data = JSON.parse(`{
                  "attacks": [
                {
                  "Name": "Absorb",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "Acid",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "Acid Armor",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Sharply raises user's Defense."
                },
                {
                  "Name": "AcidArmor",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Sharply raises user's Defense."
                },
                {
                  "Name": "Agility",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Sharply raises user's Speed."
                },
                {
                  "Name": "Amnesia",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Sharply raises user's Special Defense."
                },
                {
                  "Name": "Aurora Beam",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May lower opponent's Attack."
                },
                {
                  "Name": "AuroraBeam",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May lower opponent's Attack."
                },
                {
                  "Name": "Barrage",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Barrier",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Sharply raises user's Defense."
                },
                {
                  "Name": "Bide",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User takes damage for two turns then strikes back double."
                },
                {
                  "Name": "Bind",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "75",
                  "PP": "20",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "Bite",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Blizzard",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "70",
                  "PP": "5",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "Body Slam",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "BodySlam",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Bone Club",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "BoneClub",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Bonemerang",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Hits twice in one turn."
                },
                {
                  "Name": "Bubble",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "May lower opponent's Speed."
                },
                {
                  "Name": "Bubble Beam",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May lower opponent's Speed."
                },
                {
                  "Name": "BubbleBeam",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May lower opponent's Speed."
                },
                {
                  "Name": "Clamp",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "35",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "Comet Punch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "18",
                  "Acc": "85",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "CometPunch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "18",
                  "Acc": "85",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Confuse Ray",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "ConfuseRay",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "Confusion",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "50",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May confuse opponent."
                },
                {
                  "Name": "Constrict",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "10",
                  "Acc": "100",
                  "PP": "35",
                  "Effect": "May lower opponent's Speed by one stage."
                },
                {
                  "Name": "Conversion",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Changes user's type to that of its first move."
                },
                {
                  "Name": "Counter",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "When hit by a Physical Attack, user strikes back with 2x power."
                },
                {
                  "Name": "Crabhammer",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "90",
                  "Acc": "85",
                  "PP": "10",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Cut",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "95",
                  "PP": "30"
                },
                {
                  "Name": "Defense Curl",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Raises user's Defense."
                },
                {
                  "Name": "DefenseCurl",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Raises user's Defense."
                },
                {
                  "Name": "Dig",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Digs underground on first turn, attacks on second. Can also escape from caves."
                },
                {
                  "Name": "Disable",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "55",
                  "PP": "20",
                  "Effect": "Opponent can't use its last attack for a few turns."
                },
                {
                  "Name": "Dizzy Punch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May confuse opponent."
                },
                {
                  "Name": "DizzyPunch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May confuse opponent."
                },
                {
                  "Name": "Double Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "30",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Hits twice in one turn."
                },
                {
                  "Name": "DoubleKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "30",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Hits twice in one turn."
                },
                {
                  "Name": "Double Slap",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "10",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "DoubleSlap",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "10",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Double Team",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Raises user's Evasiveness."
                },
                {
                  "Name": "DoubleTeam",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Raises user's Evasiveness."
                },
                {
                  "Name": "Double-Edge",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "120",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User receives recoil damage."
                },
                {
                  "Name": "DoubleEdge",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "120",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User receives recoil damage."
                },
                {
                  "Name": "Dragon Rage",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Always inflicts 40 HP."
                },
                {
                  "Name": "DragonRage",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Always inflicts 40 HP."
                },
                {
                  "Name": "Dream Eater",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User recovers half the HP inflicted on a sleeping opponent."
                },
                {
                  "Name": "DreamEater",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User recovers half the HP inflicted on a sleeping opponent."
                },
                {
                  "Name": "Drill Peck",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "20"
                },
                {
                  "Name": "DrillPeck",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "20"
                },
                {
                  "Name": "Earthquake",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Power is doubled if opponent is underground from using Dig."
                },
                {
                  "Name": "Egg Bomb",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "75",
                  "PP": "10"
                },
                {
                  "Name": "EggBomb",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "75",
                  "PP": "10"
                },
                {
                  "Name": "Ember",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Explosion",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "250",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User faints."
                },
                {
                  "Name": "Fire Blast",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "85",
                  "PP": "5",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "FireBlast",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "85",
                  "PP": "5",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Fire Punch",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "FirePunch",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Fire Spin",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "15",
                  "Acc": "70",
                  "PP": "15",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "FireSpin",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "15",
                  "Acc": "70",
                  "PP": "15",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "Fissure",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "30",
                  "PP": "5",
                  "Effect": "One-Hit-KO, if it hits."
                },
                {
                  "Name": "Flamethrower",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "95",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Flash",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "70",
                  "PP": "20",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Fly",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "95",
                  "PP": "15",
                  "Effect": "Flies up on first turn, attacks on second turn."
                },
                {
                  "Name": "Focus Energy",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Increases critical hit ratio."
                },
                {
                  "Name": "FocusEnergy",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Increases critical hit ratio."
                },
                {
                  "Name": "Fury Attack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "FuryAttack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Fury Swipes",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "18",
                  "Acc": "80",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "FurySwipes",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "18",
                  "Acc": "80",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Glare",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "Growl",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Lowers opponent's Attack."
                },
                {
                  "Name": "Growth",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Raises user's Attack and Special Attack."
                },
                {
                  "Name": "Guillotine",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "30",
                  "PP": "5",
                  "Effect": "One-Hit-KO, if it hits."
                },
                {
                  "Name": "Gust",
                  "Type": "FLYING",
                  "Cat": "Phsyical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "35",
                  "Effect": "Hits Pokémon using Fly/Bounce/Sky Drop with double power."
                },
                {
                  "Name": "Harden",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Raises user's Defense."
                },
                {
                  "Name": "Haze",
                  "Type": "ICE",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Resets all stat changes."
                },
                {
                  "Name": "Headbutt",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "High Jump Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "HighJump Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "Hi Jump Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "High JumpKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "HighJumpKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "85",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "Horn Attack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "25"
                },
                {
                  "Name": "HornAttack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "25"
                },
                {
                  "Name": "Horn Drill",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "30",
                  "PP": "5",
                  "Effect": "One-Hit-KO, if it hits."
                },
                {
                  "Name": "HornDrill",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "30",
                  "PP": "5",
                  "Effect": "One-Hit-KO, if it hits."
                },
                {
                  "Name": "Hydro Pump",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "80",
                  "PP": "5"
                },
                {
                  "Name": "HydroPump",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "80",
                  "PP": "5"
                },
                {
                  "Name": "Hyper Beam",
                  "Type": "NORMAL",
                  "Cat": "Phsyical",
                  "Power": "150",
                  "Acc": "90",
                  "PP": "5",
                  "Effect": "User must recharge next turn."
                },
                {
                  "Name": "HyperBeam",
                  "Type": "NORMAL",
                  "Cat": "Phsyical",
                  "Power": "150",
                  "Acc": "90",
                  "PP": "5",
                  "Effect": "User must recharge next turn."
                },
                {
                  "Name": "Hyper Fang",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "HyperFang",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Hypnosis",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "60",
                  "PP": "20",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "Ice Beam",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "95",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "IceBeam",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "95",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "Ice Punch",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "IcePunch",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "Jump Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "95",
                  "PP": "25",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "JumpKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "95",
                  "PP": "25",
                  "Effect": "If it misses, the user loses half their HP."
                },
                {
                  "Name": "Karate Chop",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "KarateChop",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Kinesis",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "80",
                  "PP": "15",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Leech Life",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "LeechLife",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "Leech Seed",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Drains HP from opponent each turn."
                },
                {
                  "Name": "LeechSeed",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Drains HP from opponent each turn."
                },
                {
                  "Name": "Leer",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Lowers opponent's Defense."
                },
                {
                  "Name": "Lick",
                  "Type": "GHOST",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Light Screen",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Halves damage from Special attacks for 5 turns."
                },
                {
                  "Name": "LightScreen",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Halves damage from Special attacks for 5 turns."
                },
                {
                  "Name": "Lovely Kiss",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "LovelyKiss",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "Low Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "The heavier the opponent, the stronger the attack."
                },
                {
                  "Name": "LowKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "The heavier the opponent, the stronger the attack."
                },
                {
                  "Name": "Meditate",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Raises user's Attack."
                },
                {
                  "Name": "Mega Drain",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "MegaDrain",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "Mega Kick",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "120",
                  "Acc": "75",
                  "PP": "5"
                },
                {
                  "Name": "MegaKick",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "120",
                  "Acc": "75",
                  "PP": "5"
                },
                {
                  "Name": "Mega Punch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "85",
                  "PP": "20"
                },
                {
                  "Name": "MegaPunch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "85",
                  "PP": "20"
                },
                {
                  "Name": "Metronome",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User performs almost any move in the game at random."
                },
                {
                  "Name": "Mimic",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Copies the opponent's last move."
                },
                {
                  "Name": "Minimize",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Sharply raises user's Evasiveness."
                },
                {
                  "Name": "Mirror Move",
                  "Type": "FLYING",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User performs the opponent's last move."
                },
                {
                  "Name": "MirrorMove",
                  "Type": "FLYING",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User performs the opponent's last move."
                },
                {
                  "Name": "Mist",
                  "Type": "ICE",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User's stats cannot be changed for a period of time."
                },
                {
                  "Name": "Night Shade",
                  "Type": "GHOST",
                  "Cat": "Phsyical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Inflicts damage equal to user's level."
                },
                {
                  "Name": "NightShade",
                  "Type": "GHOST",
                  "Cat": "Phsyical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Inflicts damage equal to user's level."
                },
                {
                  "Name": "Pay Day",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Money is earned after the battle."
                },
                {
                  "Name": "PayDay",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Money is earned after the battle."
                },
                {
                  "Name": "Peck",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "35",
                  "Acc": "100",
                  "PP": "35"
                },
                {
                  "Name": "Petal Dance",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User attacks for 2-3 turns but then becomes confused."
                },
                {
                  "Name": "PetalDance",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User attacks for 2-3 turns but then becomes confused."
                },
                {
                  "Name": "Pin Missile",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "14",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "PinMissile",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "14",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Poison Gas",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "55",
                  "PP": "40",
                  "Effect": "Poisons opponent."
                },
                {
                  "Name": "PoisonGas",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "55",
                  "PP": "40",
                  "Effect": "Poisons opponent."
                },
                {
                  "Name": "Poison Powder",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "35",
                  "Effect": "Poisons opponent."
                },
                {
                  "Name": "PoisonPowder",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "35",
                  "Effect": "Poisons opponent."
                },
                {
                  "Name": "Poison Sting",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "100",
                  "PP": "35",
                  "Effect": "May poison the opponent."
                },
                {
                  "Name": "PoisonSting",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "100",
                  "PP": "35",
                  "Effect": "May poison the opponent."
                },
                {
                  "Name": "Pound",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "35"
                },
                {
                  "Name": "Psybeam",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May confuse opponent."
                },
                {
                  "Name": "Psychic",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "90",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May lower opponent's Special Defense."
                },
                {
                  "Name": "Psywave",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "80",
                  "PP": "15",
                  "Effect": "Inflicts damage 50-150% of user's level."
                },
                {
                  "Name": "Quick Attack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "QuickAttack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "Rage",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Raises user's Attack when hit."
                },
                {
                  "Name": "Razor Leaf",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "55",
                  "Acc": "95",
                  "PP": "25",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "RazorLeaf",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "55",
                  "Acc": "95",
                  "PP": "25",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Razor Wind",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Charges on first turn, attacks on second. High critical hit ratio."
                },
                {
                  "Name": "RazorWind",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Charges on first turn, attacks on second. High critical hit ratio."
                },
                {
                  "Name": "Recover",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User recovers half its max HP."
                },
                {
                  "Name": "Reflect",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Halves damage from Physical attacks for 5 turns."
                },
                {
                  "Name": "Rest",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User sleeps for 2 turns, but user is fully healed."
                },
                {
                  "Name": "Roar",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "In battles, the opponent switches. In the wild, the Pokémon runs."
                },
                {
                  "Name": "Rock Slide",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "75",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "RockSlide",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "75",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Rock Throw",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "90",
                  "PP": "15"
                },
                {
                  "Name": "RockThrow",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "90",
                  "PP": "15"
                },
                {
                  "Name": "Rolling Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "85",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "RollingKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "85",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Sand Attack",
                  "Type": "GROUND",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "SandAttack",
                  "Type": "GROUND",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Sand-Attack",
                  "Type": "GROUND",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Scratch",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "35"
                },
                {
                  "Name": "Screech",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "85",
                  "PP": "40",
                  "Effect": "Sharply lowers opponent's Defense."
                },
                {
                  "Name": "Seismic Toss",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Inflicts damage equal to user's level."
                },
                {
                  "Name": "SeismicToss",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Inflicts damage equal to user's level."
                },
                {
                  "Name": "Self-Destruct",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "200",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User faints."
                },
                {
                  "Name": "Selfdestruct",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "200",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User faints."
                },
                {
                  "Name": "Sharpen",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Raises user's Attack."
                },
                {
                  "Name": "Sing",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "55",
                  "PP": "15",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "Skull Bash",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Raises Defense on first turn, attacks on second."
                },
                {
                  "Name": "SkullBash",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Raises Defense on first turn, attacks on second."
                },
                {
                  "Name": "Sky Attack",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "140",
                  "Acc": "90",
                  "PP": "5",
                  "Effect": "Charges on first turn, attacks on second. May cause flinching. High critical hit ratio."
                },
                {
                  "Name": "SkyAttack",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "140",
                  "Acc": "90",
                  "PP": "5",
                  "Effect": "Charges on first turn, attacks on second. May cause flinching. High critical hit ratio."
                },
                {
                  "Name": "Slam",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "75",
                  "PP": "20"
                },
                {
                  "Name": "Slash",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Sleep Powder",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "15",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "SleepPowder",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "15",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "Sludge",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May poison opponent."
                },
                {
                  "Name": "Smog",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "70",
                  "PP": "20",
                  "Effect": "May poison opponent."
                },
                {
                  "Name": "Smokescreen",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Soft-Boiled",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half its max HP."
                },
                {
                  "Name": "Softboiled",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half its max HP."
                },
                {
                  "Name": "Solar Beam",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Charges on first turn, attacks on second."
                },
                {
                  "Name": "SolarBeam",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Charges on first turn, attacks on second."
                },
                {
                  "Name": "Sonic Boom",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "Always inflicts 20 HP."
                },
                {
                  "Name": "SonicBoom",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "Always inflicts 20 HP."
                },
                {
                  "Name": "Spike Cannon",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "SpikeCannon",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Splash",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Doesn't do ANYTHING."
                },
                {
                  "Name": "Spore",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Puts opponent to sleep."
                },
                {
                  "Name": "Stomp",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Strength",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "15"
                },
                {
                  "Name": "String Shot",
                  "Type": "BUG",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "95",
                  "PP": "40",
                  "Effect": "Lowers opponent's Speed."
                },
                {
                  "Name": "StringShot",
                  "Type": "BUG",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "95",
                  "PP": "40",
                  "Effect": "Lowers opponent's Speed."
                },
                {
                  "Name": "Struggle",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "100",
                  "PP": "-",
                  "Effect": "Only usable when all PP are gone. Hurts the user."
                },
                {
                  "Name": "Stun Spore",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "30",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "StunSpore",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "30",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "Submission",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "80",
                  "PP": "25",
                  "Effect": "User receives recoil damage."
                },
                {
                  "Name": "Substitute",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Uses HP to creates a decoy that takes hits."
                },
                {
                  "Name": "Super Fang",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Always takes off half of the opponent's HP."
                },
                {
                  "Name": "SuperFang",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Always takes off half of the opponent's HP."
                },
                {
                  "Name": "Supersonic",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "55",
                  "PP": "20",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "Surf",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "95",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Hits all adjacent Pokémon."
                },
                {
                  "Name": "Swift",
                  "Type": "NORMAL",
                  "Cat": "Phsyical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Ignores Accuracy and Evasiveness."
                },
                {
                  "Name": "Swords Dance",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Sharply raises user's Attack."
                },
                {
                  "Name": "SwordsDance",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Sharply raises user's Attack."
                },
                {
                  "Name": "Tackle",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "95",
                  "PP": "35"
                },
                {
                  "Name": "Tail Whip",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Lowers opponent's Defense."
                },
                {
                  "Name": "TailWhip",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Lowers opponent's Defense."
                },
                {
                  "Name": "Take Down",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "90",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "User receives recoil damage."
                },
                {
                  "Name": "TakeDown",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "90",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "User receives recoil damage."
                },
                {
                  "Name": "Teleport",
                  "Type": "PSYCHIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Allows user to flee wild battles; also warps player to last PokéCenter."
                },
                {
                  "Name": "Thrash",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "90",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "User attacks for 2-3 turns but then becomes confused."
                },
                {
                  "Name": "Thunder",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "120",
                  "Acc": "70",
                  "PP": "10",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Thunder Punch",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "ThunderPunch",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "75",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Thunder Shock",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "ThunderShock",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Thunder Wave",
                  "Type": "ELECTRIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "ThunderWave",
                  "Type": "ELECTRIC",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "Thunderbolt",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "95",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Toxic",
                  "Type": "POISON",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "85",
                  "PP": "10",
                  "Effect": "Badly poisons opponent."
                },
                {
                  "Name": "Transform",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User takes on the form and attacks of the opponent."
                },
                {
                  "Name": "Tri Attack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May paralyze, burn or freeze opponent."
                },
                {
                  "Name": "TriAttack",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May paralyze, burn or freeze opponent."
                },
                {
                  "Name": "Twineedle",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "25",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Hits twice in one turn. May poison opponent."
                },
                {
                  "Name": "Vine Whip",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "35",
                  "Acc": "100",
                  "PP": "10"
                },
                {
                  "Name": "VineWhip",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "35",
                  "Acc": "100",
                  "PP": "10"
                },
                {
                  "Name": "Vise Grip",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "55",
                  "Acc": "100",
                  "PP": "30"
                },
                {
                  "Name": "ViseGrip",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "55",
                  "Acc": "100",
                  "PP": "30"
                },
                {
                  "Name": "Water Gun",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "25"
                },
                {
                  "Name": "WaterGun",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "25"
                },
                {
                  "Name": "Waterfall",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May cause flinching."
                },
                {
                  "Name": "Whirlwind",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "In battles, the opponent switches. In the wild, the Pokémon runs."
                },
                {
                  "Name": "Wing Attack",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "35"
                },
                {
                  "Name": "WingAttack",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "35"
                },
                {
                  "Name": "Withdraw",
                  "Type": "WATER",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Raises user's Defense."
                },
                {
                  "Name": "Wrap",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "15",
                  "Acc": "85",
                  "PP": "20",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "Aeroblast",
                  "Type": "FLYING",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "95",
                  "PP": "5",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Ancient Power",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "May raise all user's stats at once."
                },
                {
                  "Name": "AncientPower",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "May raise all user's stats at once."
                },
                {
                  "Name": "Attract",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "If opponent is the opposite gender, it's less likely to attack."
                },
                {
                  "Name": "Baton Pass",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "User switches out and gives stat changes to the incoming Pokémon."
                },
                {
                  "Name": "BatonPass",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "User switches out and gives stat changes to the incoming Pokémon."
                },
                {
                  "Name": "Beat Up",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Each Pokémon in user's party attacks."
                },
                {
                  "Name": "BeatUp",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Each Pokémon in user's party attacks."
                },
                {
                  "Name": "Belly Drum",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User loses 50% of its max HP, but Attack raises to maximum."
                },
                {
                  "Name": "BellyDrum",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User loses 50% of its max HP, but Attack raises to maximum."
                },
                {
                  "Name": "Bone Rush",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "25",
                  "Acc": "80",
                  "PP": "10",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "BoneRush",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "25",
                  "Acc": "80",
                  "PP": "10",
                  "Effect": "Hits 2-5 times in one turn."
                },
                {
                  "Name": "Charm",
                  "Type": "Normal",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Sharply lowers opponent's Attack."
                },
                {
                  "Name": "Conversion 2",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User changes type to become resistant to opponent's last move."
                },
                {
                  "Name": "Conversion2",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User changes type to become resistant to opponent's last move."
                },
                {
                  "Name": "Cotton Spore",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "85",
                  "PP": "40",
                  "Effect": "Sharply lowers opponent's Speed."
                },
                {
                  "Name": "CottonSpore",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "85",
                  "PP": "40",
                  "Effect": "Sharply lowers opponent's Speed."
                },
                {
                  "Name": "Cross Chop",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "80",
                  "PP": "5",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "CrossChop",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "80",
                  "PP": "5",
                  "Effect": "High critical hit ratio."
                },
                {
                  "Name": "Crunch",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "Curse",
                  "Type": "Ghost",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Ghosts lose 50% of max HP and curse the opponent; Non-Ghosts raise Attack, Defense and lower Speed."
                },
                {
                  "Name": "Destiny Bond",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "If the user faints, the opponent also faints."
                },
                {
                  "Name": "DestinyBond",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "If the user faints, the opponent also faints."
                },
                {
                  "Name": "Detect",
                  "Type": "FIGHTING",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Protects the user, but may fail if used consecutively."
                },
                {
                  "Name": "Dragon Breath",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "DragonBreath",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Dynamic Punch",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "50",
                  "PP": "5",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "DynamicPunch",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "50",
                  "PP": "5",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "Encore",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Forces opponent to keep using its last move for 3 turns."
                },
                {
                  "Name": "Endure",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Always left with at least 1 HP, but may fail if used consecutively."
                },
                {
                  "Name": "Extreme Speed",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "ExtremeSpeed",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "False Swipe",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Always leaves opponent with at least 1 HP."
                },
                {
                  "Name": "FalseSwipe",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Always leaves opponent with at least 1 HP."
                },
                {
                  "Name": "Faint Attack",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "∞",
                  "PP": "20",
                  "Effect": "Ignores Accuracy and Evasiveness."
                },
                {
                  "Name": "FaintAttack",
                  "Type": "DARK",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "∞",
                  "PP": "20",
                  "Effect": "Ignores Accuracy and Evasiveness."
                },
                {
                  "Name": "Flail",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "The lower the user's HP, the higher the power."
                },
                {
                  "Name": "Flame Wheel",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "FlameWheel",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Foresight",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Resets opponent's Evasiveness, and allows Normal- and Fighting-type attacks to hit Ghosts."
                },
                {
                  "Name": "Frustration",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Power decreases with higher Friendship."
                },
                {
                  "Name": "Fury Cutter",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "10",
                  "Acc": "95",
                  "PP": "20",
                  "Effect": "Power increases each turn."
                },
                {
                  "Name": "FuryCutter",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "10",
                  "Acc": "95",
                  "PP": "20",
                  "Effect": "Power increases each turn."
                },
                {
                  "Name": "Future Sight",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "80",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "Damage occurs 2 turns later."
                },
                {
                  "Name": "FutureSight",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "80",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "Damage occurs 2 turns later."
                },
                {
                  "Name": "Giga Drain",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "GigaDrain",
                  "Type": "GRASS",
                  "Cat": "Special",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers half the HP inflicted on opponent."
                },
                {
                  "Name": "Heal Bell",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Heals the user's party's status conditions."
                },
                {
                  "Name": "HealBell",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Heals the user's party's status conditions."
                },
                {
                  "Name": "Hidden Power",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Type and power depends on user's IVs."
                },
                {
                  "Name": "HiddenPower",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "60",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Type and power depends on user's IVs."
                },
                {
                  "Name": "Icy Wind",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "55",
                  "Acc": "95",
                  "PP": "15",
                  "Effect": "Lowers opponent's Speed."
                },
                {
                  "Name": "IcyWind",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "55",
                  "Acc": "95",
                  "PP": "15",
                  "Effect": "Lowers opponent's Speed."
                },
                {
                  "Name": "Iron Tail",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "75",
                  "PP": "15",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "IronTail",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "100",
                  "Acc": "75",
                  "PP": "15",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "Lock-On",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User's next attack is guaranteed to hit."
                },
                {
                  "Name": "Mach Punch",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "MachPunch",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "User attacks first."
                },
                {
                  "Name": "Magnitude",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "30",
                  "Effect": "Hits with random power."
                },
                {
                  "Name": "Mean Look",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Opponent cannot flee or switch."
                },
                {
                  "Name": "MeanLook",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Opponent cannot flee or switch."
                },
                {
                  "Name": "Megahorn",
                  "Type": "BUG",
                  "Cat": "Physical",
                  "Power": "120",
                  "Acc": "85",
                  "PP": "10"
                },
                {
                  "Name": "Metal Claw",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "95",
                  "PP": "35",
                  "Effect": "May raise user's Attack."
                },
                {
                  "Name": "MetalClaw",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "50",
                  "Acc": "95",
                  "PP": "35",
                  "Effect": "May raise user's Attack."
                },
                {
                  "Name": "Milk Drink",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half its max HP."
                },
                {
                  "Name": "MilkDrink",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User recovers half its max HP."
                },
                {
                  "Name": "Mind Reader",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User's next attack is guaranteed to hit."
                },
                {
                  "Name": "MindReader",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User's next attack is guaranteed to hit."
                },
                {
                  "Name": "Mirror Coat",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "When hit by a Special Attack, user strikes back with 2x power."
                },
                {
                  "Name": "MirrorCoat",
                  "Type": "PSYCHIC",
                  "Cat": "Special",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "When hit by a Special Attack, user strikes back with 2x power."
                },
                {
                  "Name": "Moonlight",
                  "Type": "Normal",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers HP. Amount varies with the weather."
                },
                {
                  "Name": "Morning Sun",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers HP. Amount varies with the weather."
                },
                {
                  "Name": "MorningSun",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers HP. Amount varies with the weather."
                },
                {
                  "Name": "Mud-Slap",
                  "Type": "GROUND",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Lowers opponent's Accuracy."
                },
                {
                  "Name": "Nightmare",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "The sleeping opponent loses 25% of its max HP each turn."
                },
                {
                  "Name": "Octazooka",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "85",
                  "PP": "10",
                  "Effect": "May lower opponent's Accuracy."
                },
                {
                  "Name": "Outrage",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "90",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "User attacks for 2-3 turns but then becomes confused."
                },
                {
                  "Name": "Pain Split",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "The user's and opponent's HP becomes the average of both."
                },
                {
                  "Name": "PainSplit",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "The user's and opponent's HP becomes the average of both."
                },
                {
                  "Name": "Perish Song",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Any Pokémon in play when this attack is used faints in 3 turns."
                },
                {
                  "Name": "PerishSong",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Any Pokémon in play when this attack is used faints in 3 turns."
                },
                {
                  "Name": "Powder Snow",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "PowderSnow",
                  "Type": "ICE",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "May freeze opponent."
                },
                {
                  "Name": "Present",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "Either deals damage or heals."
                },
                {
                  "Name": "Protect",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Protects the user, but may fail if used consecutively."
                },
                {
                  "Name": "Psych Up",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Copies the opponent's stat changes."
                },
                {
                  "Name": "PsychUp",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Copies the opponent's stat changes."
                },
                {
                  "Name": "Pursuit",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Double power if the opponent is switching out."
                },
                {
                  "Name": "Rain Dance",
                  "Type": "WATER",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Makes it rain for 5 turns."
                },
                {
                  "Name": "RainDance",
                  "Type": "WATER",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Makes it rain for 5 turns."
                },
                {
                  "Name": "Rapid Spin",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Removes entry hazards and trap move effects."
                },
                {
                  "Name": "RapidSpin",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "40",
                  "Effect": "Removes entry hazards and trap move effects."
                },
                {
                  "Name": "Return",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "102",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Power increases with higher Friendship."
                },
                {
                  "Name": "Reversal",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "The lower the user's HP, the higher the power."
                },
                {
                  "Name": "Rock Smash",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "RockSmash",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "20",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May lower opponent's Defense."
                },
                {
                  "Name": "Rollout",
                  "Type": "ROCK",
                  "Cat": "Physical",
                  "Power": "30",
                  "Acc": "90",
                  "PP": "20",
                  "Effect": "Doubles in power each turn for 5 turns."
                },
                {
                  "Name": "Sacred Fire",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "95",
                  "PP": "5",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "SacredFire",
                  "Type": "FIRE",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "95",
                  "PP": "5",
                  "Effect": "May burn opponent."
                },
                {
                  "Name": "Safeguard",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "25",
                  "Effect": "The user's party is protected from status conditions."
                },
                {
                  "Name": "Sandstorm",
                  "Type": "ROCK",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Creates a sandstorm for 5 turns."
                },
                {
                  "Name": "Scary Face",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Sharply lowers opponent's Speed."
                },
                {
                  "Name": "ScaryFace",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Sharply lowers opponent's Speed."
                },
                {
                  "Name": "Shadow Ball",
                  "Type": "GHOST",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May lower opponent's Special Defense."
                },
                {
                  "Name": "ShadowBall",
                  "Type": "GHOST",
                  "Cat": "Physical",
                  "Power": "80",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "May lower opponent's Special Defense."
                },
                {
                  "Name": "Sketch",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "1",
                  "Effect": "Permanently copies the opponent's last move."
                },
                {
                  "Name": "Sleep Talk",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User performs one of its own moves while sleeping."
                },
                {
                  "Name": "SleepTalk",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "User performs one of its own moves while sleeping."
                },
                {
                  "Name": "Sludge Bomb",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "90",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May poison opponent."
                },
                {
                  "Name": "SludgeBomb",
                  "Type": "POISON",
                  "Cat": "Physical",
                  "Power": "90",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "May poison opponent."
                },
                {
                  "Name": "Snore",
                  "Type": "NORMAL",
                  "Cat": "Physical",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "15",
                  "Effect": "Can only be used if asleep. May cause flinching."
                },
                {
                  "Name": "Spark",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "65",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May paralyze opponent."
                },
                {
                  "Name": "Spider Web",
                  "Type": "BUG",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Opponent cannot escape/switch."
                },
                {
                  "Name": "SpiderWeb",
                  "Type": "BUG",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Opponent cannot escape/switch."
                },
                {
                  "Name": "Spikes",
                  "Type": "GROUND",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Hurts opponents when they switch into battle."
                },
                {
                  "Name": "Spite",
                  "Type": "GHOST",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "The opponent's last move loses 2-5 PP."
                },
                {
                  "Name": "Steel Wing",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "90",
                  "PP": "25",
                  "Effect": "May raise user's Defense."
                },
                {
                  "Name": "SteelWing",
                  "Type": "STEEL",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "90",
                  "PP": "25",
                  "Effect": "May raise user's Defense."
                },
                {
                  "Name": "Sunny Day",
                  "Type": "FIRE",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Makes it sunny for 5 turns."
                },
                {
                  "Name": "SunnyDay",
                  "Type": "FIRE",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "Makes it sunny for 5 turns."
                },
                {
                  "Name": "Swagger",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "90",
                  "PP": "15",
                  "Effect": "Confuses opponent, but sharply raises its Attack."
                },
                {
                  "Name": "Sweet Kiss",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "SweetKiss",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "75",
                  "PP": "10",
                  "Effect": "Confuses opponent."
                },
                {
                  "Name": "Sweet Scent",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Lowers opponent's Evasiveness."
                },
                {
                  "Name": "SweetScent",
                  "Type": "NORMAL",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "Lowers opponent's Evasiveness."
                },
                {
                  "Name": "Synthesis",
                  "Type": "GRASS",
                  "Cat": "Status",
                  "Power": "-",
                  "Acc": "100",
                  "PP": "5",
                  "Effect": "User recovers HP. Amount varies with the weather."
                },
                {
                  "Name": "Thief",
                  "Type": "DARK",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "10",
                  "Effect": "Also steals opponent's held item."
                },
                {
                  "Name": "Triple Kick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "10",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Hits thrice in one turn at increasing power."
                },
                {
                  "Name": "TripleKick",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "10",
                  "Acc": "90",
                  "PP": "10",
                  "Effect": "Hits thrice in one turn at increasing power."
                },
                {
                  "Name": "Twister",
                  "Type": "DRAGON",
                  "Cat": "Special",
                  "Power": "40",
                  "Acc": "100",
                  "PP": "20",
                  "Effect": "May cause flinching. Hits Pokémon using Fly/Bounce with double power."
                },
                {
                  "Name": "Vital Throw",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "∞",
                  "PP": "10",
                  "Effect": "User attacks last, but ignores Accuracy and Evasiveness."
                },
                {
                  "Name": "VitalThrow",
                  "Type": "FIGHTING",
                  "Cat": "Physical",
                  "Power": "70",
                  "Acc": "∞",
                  "PP": "10",
                  "Effect": "User attacks last, but ignores Accuracy and Evasiveness."
                },
                {
                  "Name": "Whirlpool",
                  "Type": "WATER",
                  "Cat": "Special",
                  "Power": "15",
                  "Acc": "70",
                  "PP": "15",
                  "Effect": "Traps opponent, damaging them for 4-5 turns."
                },
                {
                  "Name": "Zap Cannon",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "50",
                  "PP": "5",
                  "Effect": "Paralyzes opponent."
                },
                {
                  "Name": "ZapCannon",
                  "Type": "ELECTRIC",
                  "Cat": "Special",
                  "Power": "100",
                  "Acc": "50",
                  "PP": "5",
                  "Effect": "Paralyzes opponent."
                }
                  ]
                }`);

          const hashtable = {};
          data.attacks.forEach((attack) => {
            const name = attack.Name.toUpperCase();
            hashtable[name] = {
              Type: attack.Type,
              Cat: attack.Cat,
              Power: attack.Power,
              Acc: attack.Acc,
              PP: attack.PP,
              Effect: attack.Effect
            };
          });

          return hashtable;
        },
        getEvasionMod: function(modifier){
          if (this.attacks.battle.mode.toString() === null || modifier === undefined) {
              return 1;
          }
          const modDict = new Object();
          modDict[-6] = 3;
          modDict[-5] = 266 /100;
          modDict[-4] = 233 / 100;
          modDict[-3] = 2;
          modDict[-2] = 166 / 100;
          modDict[-1] = 133 / 100;
          modDict[0] = 1;
          modDict[1] = 75 / 100;
          modDict[2] = 60 / 100;
          modDict[3] = 50 / 100;
          modDict[4] = 43 / 100;
          modDict[5] = 36 / 100;
          modDict[6] = 33 / 100;

          return modDict[modifier];
        },
        getAccuracyMod: function(modifier){
          if (this.attacks.battle.mode.toString() === null || modifier.toString() === null) {
              return 1;
          }
          const modDict = new Object();
          modDict[6] = 3;
          modDict[5] = 266 /100;
          modDict[4] = 233 / 100;
          modDict[3] = 2;
          modDict[2] = 166 / 100;
          modDict[1] = 133 / 100;
          modDict[0] = 1;
          modDict[-1] = 75 / 100;
          modDict[-2] = 60 / 100;
          modDict[-3] = 50 / 100;
          modDict[-4] = 43 / 100;
          modDict[-5] = 36 / 100;
          modDict[-6] = 33 / 100;

          return modDict[modifier];
        },
        getMoveInfo: function(moveNumber) {
            let move = "";
            let pp = "";
            let type = "";
            let pwr = "";
            let acc = "";

            if (moveNumber === 1) {
                move = this.attacks.value.move1.toString();
                pp = this.attacks.value.move1pp;
            } else if (moveNumber === 2) {
                move = this.attacks.value.move2.toString();
                pp = this.attacks.value.move2pp;
            } else if (moveNumber === 3) {
                move = this.attacks.value.move3.toString();
                pp = this.attacks.value.move3pp;
            } else if (moveNumber === 4) {
                move = this.attacks.value.move4.toString();
                pp = this.attacks.value.move4pp;
            }

            if (move !== "" && move !== null) {
                const moveUpperCase = move.toUpperCase();
                type = this.hashtable[moveUpperCase].Type.toLowerCase();
                pwr = this.hashtable[moveUpperCase].Power;
                acc = this.hashtable[moveUpperCase].Acc;
            } else {
                type = "";
                pwr = "-";
                acc = "-";
                pp = "-";
                move = "-"
            }

            return {
                move: move,
                pp: pp,
                type: type,
                pwr: pwr,
                acc: Math.floor(acc * this.getEvasionMod(this.attacks.battle.enemyPokemon.modEvasion) * this.getAccuracyMod(this.attacks.battle.yourPokemon.modStageAccuracy))
            };
        }
    },
    template: `
    <div class="attack-panel gradient-box box-attacks">
        <div class="table-attacks texte">
            <div class="table-attacks-row">
                <attack-cell :attack="getMoveInfo(1)" />
            </div>
        </div>
    </div>
  `,
});