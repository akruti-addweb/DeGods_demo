var today = new Date(new Date().getFullYear(), 0, 0),
dd = today.getDate(),
mm = today.getMonth() + 1,
yyyy = today.getFullYear(),
today,
startDate,
d,
i,
dateArray = [];

if (dd < 10) {
dd = "0" + dd;
}

if (mm < 10) {
mm = "0" + mm;
}

startDate = mm + "-" + dd + "-" + yyyy;
d = new Date(startDate);

const squares = document.querySelector(".squares");
for (var i = 1; i < 365; i++) {
d.setDate(d.getDate() + 1);
dateArray.push(d);
console.log();
const level = Math.floor(Math.random() * 5);
squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" class="position-relative rounded-border monthly-detail-list"><div class="tooltip-calender position-absolute bottom-0 flex-column align-items-center mb-4"><span class="monthly-details position-relative">${d}</span><div class="tooltip-icon"></div></div></li>`);
}