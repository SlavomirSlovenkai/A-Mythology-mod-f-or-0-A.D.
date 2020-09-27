const preMythologyInit = init;
init = function(initData, hotloadData)
{

	// Remember to keep session/session_mythology.js in sync with this:
	g_ProjectInformation["productDescription"]["caption"] = sprintf("%(name)s\n(%(version)s)\n\n%(warning)s", {
		// Translation: Game/Mod name as displayed on lower part of the main menu seen on game start
		"name": setStringTags(sprintf(translate("%(title)s:\n%(subtitle)s"), {
			"title": translate("Mythology Mod"),
			"subtitle": translate("Demo")
		}), { "font": "sans-bold-16" }),
		"version": translate("0 A.D. Alpha XXIV"), 
		"warning": translate("WARNING: This is an early development version of the game. Many features have not been added yet.")
	});

	preMythologyInit(initData, hotloadData);
}
