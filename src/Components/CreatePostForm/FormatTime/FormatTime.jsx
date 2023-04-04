export function FormatTime(timeToFormat){

    let toTimeArray = String(timeToFormat).split(' ')
    let formatedTime = {weekDay:'',month:'',day:'',year:'',hour:'',minute:'',second:'',gmt:'',zone:''}

    formatedTime.weekDay = dayOfTheWeek(toTimeArray.shift())
    formatedTime.month = month(toTimeArray.shift())
    formatedTime.day = numericDay(toTimeArray.shift())
    formatedTime.year = year(toTimeArray.shift())
    let numericTime = timeOfDay(toTimeArray.shift())
    formatedTime.hour = numericTime[0]
    formatedTime.minute = numericTime[1]
    formatedTime.second = numericTime[2]
    formatedTime.gmt = toTimeArray.shift()
    formatedTime.zone = zone(toTimeArray)
    return(formatedTime);

    function numericDay(numericDay){
        return parseInt(numericDay)
    }

    function zone(zone){
        return zone.join(' ').substring(1,zone.length-1)
    }

    function year(year){
        let longYear = parseInt(year)
        let shortYear = parseInt(year[2]+year[3])
        return {short:shortYear, long:longYear}
    }

    function month(month){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        for(let m in months){
            if(month === months[m].substring(0,3)){
                return {short:month, long:months[m], numeric:m+1}
            }
        }
    }

    function dayOfTheWeek(dayOfTheWeek){
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
        for(let day in days){
            if(dayOfTheWeek === days[day].substring(0,3)){
                return {short:dayOfTheWeek, long:days[day]}
            }
        }
    }

    function timeOfDay(timeOfDay){
        timeOfDay = timeOfDay.split(':')
        let hour = hours(parseInt(timeOfDay[0]))
        let minute = timeOfDay[1]
        let second = timeOfDay[2]
        return [hour,minute,second]
    }

    function hours(hour){
        let circatidal = (hour%12) === 0 ? 12 : hour%12
        let meridiem = Math.floor(hour/12)===0 ? 'AM':'PM'
        let military = parseInt(hour)
        return {circatidal: circatidal, meridiem:meridiem, military:military}
    }
}