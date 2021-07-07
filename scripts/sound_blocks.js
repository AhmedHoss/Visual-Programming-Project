Blockly.defineBlocksWithJsonArray([
    {
        "type": "play_sound",
        "message0": "Play %1",
        "args0": [
        {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["C4", "sounds/c4.m4a"],
                ["D4", "sounds/d4.m4a"],
                ["E4", "sounds/e4.m4a"],
                ["F4", "sounds/f4.m4a"],
                ["G4", "sounds/g4.m4a"],
                ["A5", "sounds/a5.m4a"],
                ["B5", "sounds/b5.m4a"],
                ["C5", "sounds/c5.m4a"],
                ["DK-Fill1", "sounds/Epic Fill.wav"],
                ["DK-Fill2", "sounds/Intense Fill.wav"],
                ["DK-Crash1", "sounds/Crash 1.wav"],
                ["DK-Crash2", "sounds/Crash 2.wav"],
                ["DK-Kick1", "sounds/Knock Kick.wav"],
                ["DK-Kick2", "sounds/Mad Kick.wav"],
                ["DK-HH1", "sounds/Clean Hat.wav"],
                ["DK-HH2", "sounds/Live Hi Hat 2.wav"],
                ["DK-Clap1", "sounds/Best Clap.wav"],
                ["DK-Clap2", "sounds/New Wave Clap.wav"],
                ["FX-Satan", "sounds/Chill out satan.wav"],
                ["FX-Go", "sounds/Go.wav"],
                ["FX-Sosa", "sounds/Sosa.wav"],
                ["FX-Sus", "sounds/sus moan.wav"],
                ["FX-Anime1", "sounds/Anime tiddies.wav"],
                ["FX-Anime2", "sounds/Anime tiddies-Part_1.wav"],
                


            ]
        }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 300,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['play_sound'] = function(block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    return 'MusicMaker.queueSound(' + value + ');\n';
};