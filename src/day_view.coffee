class TS.DayView
  constructor: (@day) ->
    @dayTemplate = Handlebars.compile($("#dayTemplate").html())
    @render()
    @initlisteners()

  render: ->
    @$el = $(@dayTemplate(@day))
    $('body').append(@$el)

  initlisteners: ->
    @$el.on('click', '.day-header', @toggleDayHeader)

  toggleDayHeader: (ev) =>
    $target = $(ev.target).closest('.schedule-day').toggleClass('collapsed')

