class window.DayView
  constructor: (@day) ->
    @dayTemplate = Handlebars.compile($("#dayTemplate").html())
    @render()

  render: ->
    $('body').append @dayTemplate(@day)