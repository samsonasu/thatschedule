class TS.DayView
  constructor: (@day) ->
    @dayTemplate = Handlebars.compile($("#dayTemplate").html())
    @render()
    @initlisteners()

  render: ->
    @$el = $(@dayTemplate(@day))
    $('body').append(@$el)
    result = /8\/(\d+)/.exec(@day.Day)
    date = result[1]
    if date < new Date().getDate()
      @$el.addClass('collapsed')

  initlisteners: ->
    @$el.on('click', '.day-header', @toggleDayHeader)
    @$el.on('click', '.schedule-row', @showDetails)
    @$el.on('click', '.close-details', @hideDetails)


  toggleDayHeader: (ev) =>
    $target = $(ev.target).closest('.schedule-day').toggleClass('collapsed')

  showDetails: (ev) =>
    $(ev.target).closest('.schedule-row').siblings('.full-session-details, .close-details').show()
    $('body').css
      overflow: 'hidden'

  hideDetails: (ev) =>
    $(ev.target).closest('.full-session-details').hide()
    $('body').css
      overflow: 'visible'

