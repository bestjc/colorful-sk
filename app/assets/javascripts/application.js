// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require isotope.pkgd.js
//= require imagesloaded.pkgd.js
//= require packery-mode.pkgd.js
//= require turbolinks
//= require_tree .
/*$(document).ready(function() {
  $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item',
    packery: {
      columnWidth: 16.666%,
      gutter: 15
    }
  });
});**/
docReady( function() {

  var grid = document.querySelector('.grid');
  var iso;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    iso = new Isotope( grid, {
      layoutMode: 'packery',
      itemSelector: '.grid-item',
      packery: {
        gutter: 15
      }
    });
  });
  
});