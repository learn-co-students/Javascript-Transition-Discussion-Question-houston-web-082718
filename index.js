// $('#save_lincoln').click(() => saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if (isNaN(interval)) {
    interval = 10000
  }
  // $('#foreground').fadeOut(interval);
  foreground = document.querySelector('#foreground');
  fadeOut(foreground, interval);

}


function fadeOut(fadeTarget, interval) {
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.01;
    } else {
      clearInterval(fadeEffect);
    }
  }, interval / 100);
}

button = document.getElementById('save_lincoln');

button.addEventListener('click', () => {
  console.log('fired');
  saveLincoln(parseInt(document.querySelector('#interval').value));
});