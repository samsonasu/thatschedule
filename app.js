(function() {
  window.TS = {};

  $(document).ready(function() {
    return $.getJSON('sessions.json', function(sessionData) {
      return _.each(sessionData.ScheduledSessions, function(day) {
        return new TS.DayView(day);
      });
    });
  });

}).call(this);

(function() {
  TS.DayView = (function() {
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
