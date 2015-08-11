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
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  TS.DayView = (function() {
    function DayView(day) {
      this.day = day;
      this.toggleDayHeader = bind(this.toggleDayHeader, this);
      this.dayTemplate = Handlebars.compile($("#dayTemplate").html());
      this.render();
      this.initlisteners();
    }

    DayView.prototype.render = function() {
      this.$el = $(this.dayTemplate(this.day));
      return $('body').append(this.$el);
    };

    DayView.prototype.initlisteners = function() {
      return this.$el.on('click', '.day-header', this.toggleDayHeader);
    };

    DayView.prototype.toggleDayHeader = function(ev) {
      var $target;
      return $target = $(ev.target).closest('.schedule-day').toggleClass('collapsed');
    };

    return DayView;

  })();

}).call(this);
