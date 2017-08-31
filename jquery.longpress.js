/**
 *  jquery-longpress - v1.0.0
 *  Support short and long press on an HTML element
 *
 *  Made by Guy Vider
 *  Under MIT License
 *
 * @param {function}  shortCallback - handle short press event
 * @param {function}  longCallback - handle long press event
 * @param {integer} duration - duration in ms, until long press handler is called
 *
 */
;(function($) {
  "use strict";
  $.fn.longPress = function(shortCallback, longCallback, duration = 750) {
    return this.each(function() {
      let $this = $(this);
      let clickTimer, longPressOccurred = false;

      let mouseDown = function(e) {
        let context = $(this);
        clickTimer = setTimeout(function() {
          longPressOccurred = true;
          if('function' === typeof longCallback) {
            longCallback.call(context, e);
          }
          else {
            $.error('Callback required for long press. You provided: ' + typeof longCallback);
          }
        }, duration);
      };

      let mouseUp = function(e) {
        let context = $(this);
        if(!longPressOccurred) {
          clearTimeout(clickTimer);
          if('function' === typeof shortCallback) {
            shortCallback.call(context, e);
          }
          else {
            $.error('Callback required for long press. You provided: ' + typeof shortCallback);
          }
        }
        else {
          longPressOccurred = false;
        }
      };

      // cancel long press event if the finger or mouse was moved
      let mouseMove = function(e) {
        clearTimeout(clickTimer);
      };

      //events
      $this.on('mousedown touchstart', mouseDown);
      $this.on('mouseup touchend', mouseUp);
      $this.on('mousemove touchmove', mouseMove);
    });
  };
}(jQuery));
