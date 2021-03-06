// Description:
//   Huemul te dice cuánto falta pal 18 de septiembre en Chile, fiestas patrias.
//
// Dependencies:
//   Moment
//
// Commands:
//   hubot 18 - Retorna la cantidad de días faltantes para el 18 de septiembre
//
// Author:
//   @jorgeepunan

const moment = require('moment')

const frases = ['Preparen la sed.', 'Tiqui-tiqui-tíiiiiiiii', '¡A viajar fuera de Chile patriotas!', '¡Afilen las espuelas!']

module.exports = robot => {
  robot.respond(/18\s?(.*)/i, msg => {
    const year = new Date().getFullYear()
    const month = 8 // Septiembre
    const day = 18

    let eventDate = moment([year, month, day])
    const todaysDate = moment()

    if (todaysDate.isAfter(eventDate)) {
      eventDate = eventDate.add(1, 'Y')
    }

    const daysleft = eventDate.diff(todaysDate, 'days')
    if (daysleft === 0) {
      msg.send(`:flag-cl: ¡Hoy es 18! ¡A emborracharte!`)
    } else {
      msg.send(`:flag-cl: Quedan ${daysleft} días pa'l 18 de septiembre.`)
      msg.send(`:huemul-huaso: ${msg.random(frases)}`)
    }
  })
}
