
// Obtiene las referencias a los elementos del cronómetro
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Define la fecha objetivo para el cronómetro (puede ser una fecha en el futuro)
const targetDate = new Date('2024-01-13T14:00:00');

// Función para actualizar el cronómetro cada segundo
function updateCountdown() {
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Actualiza los elementos en la página con los valores del cronómetro
  daysElement.textContent = formatTime(days);
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
}

// Función para formatear el tiempo en dos dígitos (agregando un cero al inicio si es necesario)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Actualiza el cronómetro inicialmente
updateCountdown();

// Actualiza el cronómetro cada segundo
setInterval(updateCountdown, 1000);
