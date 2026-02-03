# Akan Name / Birth Weekday Calculator ✅

A small static webpage that calculates the weekday you were born on from a selected date. The project uses plain HTML/CSS/JavaScript and works by picking a date in the browser and computing the UTC weekday.

---

## 🚀 Features

- Simple UI to pick a date and find which weekday you were born on
- Accessible form (aria attributes) and responsive styling
- Ready to extend with Akan name assignment by weekday (male/female)

---

## 📁 Files

- `index.htm` — HTML markup and UI
- `style.css` — Basic styles for layout and components
- `script.js` — JavaScript that parses the date input and computes the weekday

---

## ▶️ How to run

Open `index.htm` in any modern browser. For a local server (optional):

- With Python 3: `python -m http.server 8000`
- Or with npm: `npx http-server`

Then visit `http://localhost:8000` (or the port you chose).

---

## 🛠 Development notes & quick fix

I noticed `script.js` currently contains a few variable name bugs and duplicated text which can cause runtime errors. If you see an error in the console or the weekday does not appear, replace the script with this corrected logic:

```js
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
    const [yr, m, d] = value.split('-').map(Number);
    const dt = new Date(Date.UTC(yr, m - 1, d));
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const weekday = days[dt.getUTCDay()];
    result.textContent = `You were born on a ${weekday}.`;
  });
})();
```

---

## 💡 Suggested improvements

- Map weekdays to Akan names and add a gender selector (example arrays below)

```js
const akanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const akanFemale = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
```

- Add unit tests or automated checks
- Improve localization and date parsing for different browsers/locales

---

## 🤝 Contributing

PRs and issues are welcome. If you submit a bug fix or enhancement, describe the change and add a quick test/example if possible.

---

## 📝 License

Add a license of your choice (MIT is common for small projects).

---

If you'd like, I can also apply the small `script.js` fix directly and add an example mapping to Akan names. 👍