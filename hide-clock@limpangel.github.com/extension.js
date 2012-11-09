const Main = imports.ui.main;

function init() {}

function enable() {
    if (typeof Main.panel._statusArea === 'undefined') {
        Main.panel.statusArea.dateMenu.actor.hide();
    } else {
        Main.panel._statusArea.dateMenu.actor.hide();
    }
}

function disable() {
    if (typeof Main.panel._statusArea === 'undefined') {
        Main.panel.statusArea.dateMenu.actor.show();
    } else {
        Main.panel._statusArea.dateMenu.actor.show();
    }
}
