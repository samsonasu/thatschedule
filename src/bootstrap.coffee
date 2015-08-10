window.TS = {}

$(document).ready ->
  $.getJSON('sessions.json', (sessionData) ->
    _.each(sessionData.ScheduledSessions, function(day) {
        new TS.DayView(day)