var createMenu = require('simple-terminal-menu')
 
function showSelection(label, marker) {
  console.log("label: " + label + "; marker: " + marker + ";")
}
 
function mainMenu() {
  var menu = createMenu({ // settings passed through to terminal-menu
    x: 3,
    y: 2
  })
  menu.writeLine("My Menu", "(tm)")
  menu.writeSeparator()
  menu.add("A", "[selected]", showSelection)
  menu.add("B", showSelection)
  menu.writeSeparator()
  menu.add("open submenu", factoryMenuA)
  menu.add("exit", menu.close)
}
 
function subMenu() {
  var menu = createMenu()
  menu.writeLine("SubMenu")
  menu.writeSeparator()
  menu.add("C", "[selected]", showSelection)
  menu.add("D", showSelection)
  menu.writeSeparator()
  menu.add("cancel", mainMenu)
  menu.add("niceTitle", nicelyTitledMenu)
  menu.add("exit", menu.close)
}
 
function nicelyTitledMenu() {
  var menu = createMenu();
  menu.writeTitle("Awesome window")
  menu.writeSubtitle("A little more colorful")
  menu.writeSeperator()
  menu.add("cancel", subMenu)
  menu.add("factoryA", factoryMenuA)
  menu.add("exit", menu.close)
}
 
 
// Options for the menu when created through the factory
var factoryMenuOptions = {} // Can be empty! the factory uses some sensible defaults!
 
// Defaults for creating menu with the factory
var defaultFactoryOptions = {
  title: "Factory Title",
  // you could also specify `subtitle:`, menu & extras are not available.
}
var factory = require('simple-terminal-menu/factory')(factoryMenuOptions, defaultFactoryOptions);
 
function factoryMenuA() {
  factory.create({
    subtitle: "factory-a",
    menu: [{
      label: "E",
      handler: showSelection
    }, {
      label: "F",
      handler: showSelection
    }],
    extras: [{
        label: "factoryB",
        handler: factoryMenuB
      },{
        label: "cancel",
        handler: nicelyTitledMenu
      }]
  })
}
 
function factoryMenuB() {
  factory.create({
    subtitle: "factory-b",
    menu: [{
        label: "G",
        handler: showSelection
      }],
    extras: [{
        label: "factoryA",
        handler: factoryMenuA
      },{
        label: "cancel",
        handler: nicelyTitledMenu
      }]
})}
 
 
mainMenu()