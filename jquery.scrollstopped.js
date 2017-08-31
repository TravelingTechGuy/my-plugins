/**
 *  jquery-scrollstopped - v1.0.0
 *  Detect when scrolling stops for a scrollable element
 *
 *  Made by Guy Vider
 *  Under MIT License
 *
 * @param {function}  handler - the handler to call when scroll has stopped
 *
 */
;(function($) {
  "use strict";
  $.fn.scrollStopped = function(handler) {
    var that = this, $this = $(that);
    $this.scroll(function(e) {
      clearTimeout($this.data('scrollTimeout'));
      $this.data('scrollTimeout', setTimeout(handler.bind(that), 250, e));
    });
  };
}(jQuery));
