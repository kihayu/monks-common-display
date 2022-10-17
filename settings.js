import { MonksCommonDisplay, i18n } from "./monks-common-display.js";
import { ControllerApp } from "./apps/controller.js"

export const registerSettings = function () {
    // Register any custom module settings here
	let modulename = "monks-common-display";

	const debouncedReload = foundry.utils.debounce(function () { window.location.reload(); }, 100);

	game.settings.registerMenu(modulename, 'configure', {
		name: 'Configure Common Display',
		label: 'Configure Common Display',
		hint: 'Configure what player is used for the common display.',
		icon: 'fas fa-chalkboard-teacher',
		restricted: true,
		type: ControllerApp,
		onClick: (value) => {
			log('Reset position');
		}
	});

	game.settings.register(modulename, "show-chat-log", {
		name: i18n("MonksCommonDisplay.show-chat-log.name"),
		hint: i18n("MonksCommonDisplay.show-chat-log.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});
	game.settings.register(modulename, "show-camera-views", {
		name: i18n("MonksCommonDisplay.show-camera-views.name"),
		hint: i18n("MonksCommonDisplay.show-camera-views.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});
	game.settings.register(modulename, "show-combat", {
		name: i18n("MonksCommonDisplay.show-combat.name"),
		hint: i18n("MonksCommonDisplay.show-combat.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});

	game.settings.register(modulename, "allow-gm-players", {
		name: i18n("MonksCommonDisplay.allow-gm-players.name"),
		hint: i18n("MonksCommonDisplay.allow-gm-players.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register(modulename, "show-combatants", {
		name: i18n("MonksCommonDisplay.show-combatants.name"),
		hint: i18n("MonksCommonDisplay.show-combatants.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});

	game.settings.register(modulename, "limit-shown", {
		name: i18n("MonksCommonDisplay.limit-shown.name"),
		scope: "world",
		config: true,
		range: {
			min: 1,
			max: 5,
			step: 1,
		},
		default: 1,
		type: Number,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});

	game.settings.register(modulename, "combat-scale", {
		name: i18n("MonksCommonDisplay.combat-scale.name"),
		hint: i18n("MonksCommonDisplay.combat-scale.hint"),
		scope: "world",
		config: true,
		range: {
			min: 0.1,
			max: 5,
			step: 0.1,
		},
		default: 1,
		type: Number,
		onChange: () => {
			MonksCommonDisplay.toggleCommonDisplay();
		}
	});

	game.settings.register(modulename, "close-after", {
		name: i18n("MonksCommonDisplay.close-after.name"),
		hint: i18n("MonksCommonDisplay.close-after.hint"),
		scope: "world",
		config: true,
		range: {
			min: 0,
			max: 60,
			step: 1,
		},
		default: 10,
		type: Number
	});

	game.settings.register(modulename, "show-vertical", {
		name: game.i18n.localize("MonksTokenBar.show-vertical.name"),
		hint: game.i18n.localize("MonksTokenBar.show-vertical.hint"),
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
		onChange: debouncedReload
	});

	game.settings.register(modulename, "startupdata", {
		scope: "client",
		config: false,
		default: false,
		type: Boolean,
	});

	game.settings.register(modulename, "playerdata", {
		scope: "world",
		config: false,
		default: {},
		type: Object,
	});

	game.settings.register(modulename, "show-toolbar", {
		scope: "client",
		config: false,
		default: false,
		type: Boolean,
	});

	/*
	 * //These settings should be per scene
	game.settings.register(modulename, "screen", {
		scope: "world",
		config: false,
		default: "gm",
		type: String,
	});

	game.settings.register(modulename, "focus", {
		scope: "world",
		config: false,
		default: "gm",
		type: String,
	});
	*/

	game.settings.register(modulename, "screen-toggle", {
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

	game.settings.register(modulename, "focus-toggle", {
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});
};
