/**
 *  jquery-doubleclick - v1.0.0
 *  Support click/double-click event on the same element
 *
 *  By Guy Vider 2017
 *  Under MIT License
 *
 * @param {function}  singleClickCallback - handle single click event
 * @param {function}  doubleClickCallback - handle double click event
 * @param {integer} duration - duration in ms, until short click handler is called
 *
 */

;(function($) {
  "use strict";
  $.fn.doubleClick = function(singleClickCallback, doubleClickCallback, duration = 500) {
    return this.each(function() {
      let $this = $(this);
      let clickTimer, clicks = 0;

      let onClick = function(e) {
        let context = $(this);
        clicks++;
        if(clicks === 1) {
          clickTimer = setTimeout(() => {
            if('function' === typeof singleClickCallback) {
              singleClickCallback.call(context, e);
            }
            else {
              $.error('Callback required for long press. You provided: ' + typeof singleClickCallback);
            }
            clicks = 0;
          }, duration);
        }
        else {
          clearTimeout(clickTimer);
          clicks = 0;
          if('function' === typeof doubleClickCallback) {
            doubleClickCallback.call(context, e);
          }
          else {
            $.error('Callback required for long press. You provided: ' + typeof doubleClickCallback);
          }
        }
      };

      $this.on('click touchstart', onClick);
      $this.on('dblclick', function(e) {
        e.preventDefault();
      });
    });
  };
}(jQuery));

