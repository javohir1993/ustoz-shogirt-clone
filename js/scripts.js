var count = Number(localStorage.getItem(`count`)) || 0;


// DOM



var elNewPosterTemplate = $_('.js-poster-item-template').content;
var elResultsList = $_('.js-results-list');

// E'lonlarni saqlab boradigan array:
var posters = JSON.parse(localStorage.getItem(`posters`)) || [];

var displayPosters = function (posts = posters) {
  var newPostersFragment = document.createDocumentFragment();
  posts.forEach(function(poster) {

    var elNewPosterItem = elNewPosterTemplate.cloneNode(true);

    $_('.js-poster-item-title', elNewPosterItem).textContent = poster.title;
    $_('.js-poster-item-title', elNewPosterItem).dataset.id = poster.id;
    $_('.js-poster-item-company-name', elNewPosterItem).textContent = poster.company_name;
    $_('.js-poster-item-time', elNewPosterItem).textContent = poster.work_hours;
    $_('.js-poster-item-region', elNewPosterItem).textContent = poster.region;

    newPostersFragment.appendChild(elNewPosterItem);
  });

  elResultsList.appendChild(newPostersFragment);
};

displayPosters();
localStorage.setItem('posters', JSON.stringify(posters));


// Yangi e'lon qo'shish modali:

var elNewPosterForm = $_('.js-new-poster-form');

if (elNewPosterForm) {
  var elNewPosterTitleInput = $_('.js-new-poster-title', elNewPosterForm);
  var elNewCompanyNameInput = $_('.js-new-poster-company-name', elNewPosterForm);
  var elNewTechnologiesInput = $_('.js-new-poster-technology', elNewPosterForm);
  var elNewTelegramInput = $_('.js-new-poster-telegram', elNewPosterForm);
  var elNewPhoneInput = $_('.js-new-poster-phone-number', elNewPosterForm);
  var elNewRegionSelect = $_('.js-new-poster-region-select', elNewPosterForm);
  var elNewResponsiblePersonInput = $_('.js-new-poster-responsibly-person', elNewPosterForm);
  var elNewWorkHoursSelect = $_('.js-new-poster-work-hours-select', elNewPosterForm);
  var elNewMinSalaryInput = $_('.js-new-poster-salary', elNewPosterForm);
  var elNewMoreInput = $_('.js-new-poster-more-info', elNewPosterForm);
}


// Yangi e'lon qo'shish modalidagi formaga quloq solamiz:


elNewPosterForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  // console.log(`submit bo'ldi`);
  count++;
  localStorage.setItem(`count`, JSON.stringify(count))

  var newPosterTitleInputValue = elNewPosterTitleInput.value;
  var newCompanyNameInputValue = elNewCompanyNameInput.value;
  var newTechnologiesInputValue = elNewTechnologiesInput.value;
  var newTelegramInputValue = elNewTelegramInput.value;
  var newPhoneInputValue = elNewPhoneInput.value;
  var newResponsiblePersonInputValue = elNewResponsiblePersonInput.value;
  var newMinSalaryInputValue = elNewMinSalaryInput.value;
  var newMoreInfoInputValue = elNewMoreInput.value;
  var newRegionSelectValue = elNewRegionSelect.value;
  var newWorkHoursSelectValue = elNewWorkHoursSelect.value;

  posters.unshift({
    id: count,
    title: newPosterTitleInputValue,
    company_name: newCompanyNameInputValue,
    technologies: newTechnologiesInputValue,
    telegram: newTelegramInputValue,
    phone_number: newPhoneInputValue,
    responsible_person: newResponsiblePersonInputValue,
    min_salary: newMinSalaryInputValue,
    more_info: newMoreInfoInputValue,
    region: newRegionSelectValue,
    work_hours: newWorkHoursSelectValue
  });
  localStorage.setItem(`posters`, JSON.stringify(posters))

  elResultsList.innerHTML = '';
  displayPosters();

  elNewPosterTitleInput.value = '';
  elNewCompanyNameInput.value = '';
  elNewTechnologiesInput.value = '';
  elNewTelegramInput.value = '';
  elNewPhoneInput.value = '';
  elNewResponsiblePersonInput.value = '';
  elNewMinSalaryInput.value = '';
  elNewMoreInput.value = '';
  elNewRegionSelect.value = '';
  elNewWorkHoursSelect.value = '';

  alert(`E'loningiz muvaffaqiyatli qo'shildi. Bosh sahifaga o'tib ko'rishingiz mumkin🥳`);
});


// Bosh sahifadagi har bir e'longa o'ziga mos bo'lgan ma'lumotlarni modalga chiqarish:

elResultsList.addEventListener('click', function(evt){
  // console.log(evt.target)

  if (evt.target.matches('.js-poster-item-title')) {
    // console.log(evt.target.textContent);
    // console.log(evt.target.dataset.id);
    var posterIdItem = posters.find(function (poster) {
      // console.log(poster);
      return Number(evt.target.dataset.id) === poster.id;
    })
    // console.log(posterIdItem);
    var showMoreInfoItemPoster = $_('.js-item-poster-modal');

    $_('.js-item-poster-heading', showMoreInfoItemPoster).textContent = posterIdItem.title;
    $_('.js-item-poster-firm-name', showMoreInfoItemPoster).textContent = posterIdItem.company_name;
    $_('.js-item-poster-region-more', showMoreInfoItemPoster).textContent = posterIdItem.region;
    $_('.js-item-poster-technologies-more', showMoreInfoItemPoster).textContent = posterIdItem.technologies;
    $_('.js-item-poster-telegram-more', showMoreInfoItemPoster).textContent = posterIdItem.telegram;
    $_('.js-item-poster-telegram-more', showMoreInfoItemPoster).href = `https://telegram.com/${posterIdItem.telegram}`;
    $_('.js-item-poster-phone-number-more', showMoreInfoItemPoster).textContent = posterIdItem.phone_number;
    $_('.js-item-poster-phone-number-more', showMoreInfoItemPoster).href = `tel:${posterIdItem.phone_number}`;
    $_('.js-item-poster-responsibly-person-more', showMoreInfoItemPoster).textContent = posterIdItem.responsible_person;
    $_('.js-item-poster-work-time', showMoreInfoItemPoster).textContent = posterIdItem.work_hours;
    $_('.js-item-poster-salary-more', showMoreInfoItemPoster).textContent = posterIdItem.min_salary;
    $_('.js-item-poster-more', showMoreInfoItemPoster).textContent = posterIdItem.more_info;
  }
});



// var bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];

// var updateLocalBookmarks = function () {
//   localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
// };

// var addToBookmarks = function (movie) {
//   bookmarkedMovies.push(movie);
//   updateLocalBookmarks();
// };

// var removeFromBookmarks = function (index) {
//   // bu yerda findIndex bilan indeksi topilgani yaxshi. ID qabul qilib oladi
//   bookmarkedMovies.splice(index, 1);
//   updateLocalBookmarks();
// };



// // Bosh sahifaning e'lonlarni qidirish bo'yicha code lari:
// var elForm = $_('.formaningClassi');
// var elTechnologyInput = $_('.texnologiyaInputClassi');
// var elTerritorySelect = $_('.territoriyaSelectClassi');
// var elWorkHoursSelect = $_('.workHoursSelectClassi');
// var elMinSalary = $_('.elMinSalaryClassi');

// // Bosh sahifaning e'lonlarni qidirish formasining tuzilishi:
// elForm.addEventListener('submit', function(evt){
//   evt.preventDefault();

//   var texnologiyaInputValue = eltexnologiyaInput.value;
//   var minSalaryValue = elMinSalary.value;


// });
