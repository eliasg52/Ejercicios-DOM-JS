export default function clockAlarm(clock, clockContainer) {
  const d = document;

  /*   d.addEventListener('click', (e) => {
    if (e.target.matches(`${buttons} *`)) {
      d.querySelector(button).disabled = true;
    }
  });
} */
  d.querySelector(`${clock}`).addEventListener('click', (e) => {
    d.querySelector(`${clock}`).disabled = true;

    /*  let hora =  */ let HORA = setInterval(() => {
      let hora = new Date().toLocaleTimeString();
      console.log(hora);
    }, 1000);

    /*  console.log(hora); */
    const $hour = document.createElement('span');
    $hour.textContent = HORA;

    d.querySelector(`${clockContainer}`).appendChild($hour);
  });
}
