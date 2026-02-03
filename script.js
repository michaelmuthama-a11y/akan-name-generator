(function(){
  const form = document.getElementById('birth-form');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = document.getElementById('dob').value;
    if(!value){
      result.textContent = 'Please select a date.';
      return;
    }
    // value is YYYY-MM-DD — use UTC to avoid timezone shifts
    const [yr, mnth, day] = value.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const weekday = days[dt.getUTCDay()];
    result.textContent = `You were born on a ${weekday}.`;
  });
})();r, m, d] = value.split('-').map(Number);
    const dt = new Date(Date.UTC(yr, m - 1, d));
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const weekday = days[dt.getUTCDay()];
    result.textContent = `You were born on a ${weekday}.`;
  });
})();