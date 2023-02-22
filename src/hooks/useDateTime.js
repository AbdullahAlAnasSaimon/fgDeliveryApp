export const useDateTime = (timeDate) =>{
  
    const year = timeDate?.getFullYear();
    const month = String(timeDate?.getMonth() + 1).padStart(2, '0');
    const day = String(timeDate?.getDate()).padStart(2, '0');
    let hours = timeDate.getHours();
    let minutes = timeDate.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = hours + ':' + minutes + ' ' + ampm;

    const formattedDate = `${year}-${month}-${day} ${timeString}`;
    // console.log(formattedDate);
    return [formattedDate];
}