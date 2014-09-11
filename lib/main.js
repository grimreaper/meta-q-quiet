var { Hotkey } = require("sdk/hotkeys");

function main()
{
    var keypress_meta_q = Hotkey({
      combo: "meta-q",
      onPress: function() { }
    });
    var keypress_meta_q = Hotkey({
      combo: "meta-shift-q",
      onPress: function() { }
    });
}

main();

