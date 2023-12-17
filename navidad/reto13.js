/*
Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
*/

function calculateTime(deliveries) {
  const format = (value) => {
    return `${value}`.length === 1 ? `0${value}` : value
  }

  let hours = 0
  let minutes = 0
  let seconds = 0

  for (let time of deliveries) {
    const array = time.split(':')
    hours += Number(array[0])
    minutes += Number(array[1])
    seconds += Number(array[2])
  }

  const sign = hours>6 ? '' : '-'
  const fullTime = 3600*hours + 60*minutes + seconds
  const limitTime = 7*3600
  const resTime = Math.abs(limitTime - fullTime)

  hours = Math.floor(resTime/3600)
  minutes = Math.floor((resTime - hours*3600)/60)
  seconds = resTime - minutes*60 - hours*3600

  return `${sign}${format(hours)}:${format(minutes)}:${format(seconds)}`
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']))
// "-00:00:01"

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])) // '-05:29:00'