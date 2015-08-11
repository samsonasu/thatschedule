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
      this.hideDetails = bind(this.hideDetails, this);
      this.showDetails = bind(this.showDetails, this);
      this.toggleDayHeader = bind(this.toggleDayHeader, this);
      this.dayTemplate = Handlebars.compile($("#dayTemplate").html());
      this.render();
      this.initlisteners();
    }

    DayView.prototype.render = function() {
      var date, result;
      this.$el = $(this.dayTemplate(this.day));
      $('body').append(this.$el);
      result = /8\/(\d+)/.exec(this.day.Day);
      date = result[1];
      if (date < new Date().getDate()) {
        return this.$el.addClass('collapsed');
      }
    };

    DayView.prototype.initlisteners = function() {
      this.$el.on('click', '.day-header', this.toggleDayHeader);
      this.$el.on('click', '.schedule-row', this.showDetails);
      return this.$el.on('click', '.close-details', this.hideDetails);
    };

    DayView.prototype.toggleDayHeader = function(ev) {
      var $target;
      return $target = $(ev.target).closest('.schedule-day').toggleClass('collapsed');
    };

    DayView.prototype.showDetails = function(ev) {
      $(ev.target).closest('.schedule-row').siblings('.full-session-details, .close-details').show();
      return $('body').css({
        overflow: 'hidden'
      });
    };

    DayView.prototype.hideDetails = function(ev) {
      $(ev.target).closest('.full-session-details').hide();
      return $('body').css({
        overflow: 'visible'
      });
    };

    return DayView;

  })();

}).call(this);
