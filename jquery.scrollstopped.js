/*
 *  jquery-scrollstopped - v1.0.0
 *  Detect when scrolling stops for a scrollable element
 *
 *  Made by Guy Vider
 *  Under MIT License
 */
;(function($) {
  "use strict";
  $.fn.scrollStopped = function(callback) {
    var that = this, $this = $(that);
    $this.scroll(function(e) {
      clearTimeout($this.data('scrollTimeout'));
      $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, e));
    });
  };
}(jQuery));
