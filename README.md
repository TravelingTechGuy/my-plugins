# jQuery plugins to handle events that require timing

## Abstract

Once in a while you look for an event handler, and find, to your surprise that:

1. It does not exist
1. StackOverflow is full of people who search for it, just like you
1. Handling the event you're looking for requires conjecture that depends on a timer

This repo contains several such handlers, converted into jQuery plugins, so they can easily be dropped into web or mobile web projects, and used as seamlessly as possible.

## Demo

The `demo.html` page contains a script using all the plugins in the repo. Just clone the entire repo, and open the html in your browser. While style is minimal (and abyssmal), you can easily understand how to use each plugin.

## 1. scrollStopped

### Purpose

Finding out when the user stopps scrolling an element (so you can e.g. update your view to show data pertinent to the contents that just scrolled in).

### Usage

`$(element).scrollStopped(handler)` - the handler will be called on scroll stop.

- All handlers have the signature `function(e) {}`.
- Avoid using ES6 arrow functions, unless you don't need access to `$(this)` in the handler.

## 2. doubleClick

### Purpose

While jQuery does have a `.dblClick` (or `.on('dblClick')`) event, the problem starts when you want the same element to support both `click` and `dblClick`. This plugin attaches itself to the element, and supports both events.

### Usage

`$(element).doubleClick(singleClickHandler, doubleClickHandler, duration)`

- `singleClickHandler` will be called when the user clicks the element once in `duration` milliseconds
- `doubleClickHandler` will be called when the user clicks the element twice in `duration` milliseconds
- `duration` - milliseconds to wait before calliing the single click handler. Defaults to 500

## 3. longPress

### Purpose

Simulate a long press you get on a mobile device - while still maintaining a short press (click) behavior on the element.

### Usage

`$(element).longPress(shortPressHandler, longPressHandler, duration)`

- `shortPressHandler` will be called when the user clicks and exits the element within `duration` milliseconds
- `longPressHandler` will be called when the user clicks and stays on the element before  `duration` milliseconds passed
- `duration` - milliseconds to wait before calliing the short press handler. Defaults to 750

## Thanks and inspiration

1. scrollStopped - was inspired by this [StackOverflow answer](https://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stop)
1. doubleClick - was inspired by this [StackOverflow answer](https://stackoverflow.com/questions/5497073/how-to-differentiate-single-click-event-and-double-click-event)
1. longPress - my initial approach was to look at [Vaidik Kapoor's solution](https://github.com/vaidik/jquery-longpress), although my logic is quite different now
