(function() {
  window.DayView = (function() {
    function DayView(day) {
      this.day = day;
      this.dayTemplate = Handlebars.compile($("#dayTemplate").html());
      this.render();
    }

    DayView.prototype.render = function() {
      return $('body').append(this.dayTemplate(this.day));
    };

    return DayView;

  })();

}).call(this);
