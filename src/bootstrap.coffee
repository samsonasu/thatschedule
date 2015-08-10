window.TS = {}

$(document).ready ->
  $.getJSON 'sessions.json', (sessionData) ->
    _.each sessionData.ScheduledSessions, (day) ->
      new TS.DayView(day)