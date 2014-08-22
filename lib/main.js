var { Hotkeys } = require("sdk/hotkeys");

function main()
{
    var keypress_meta_q = Hotkeys({
      combo: "meta-q",
      onPress: function() { }
    });
}

main();

