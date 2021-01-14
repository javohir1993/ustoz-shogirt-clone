
// E'lonlarni saqlab boradigan array:
var posters = [];

// DOM
// var elBody = $_('.body');

// // LightDarkToggle button ni topib kelamiz:
// var elLightDarkToggleButton = $_('.toggle-button')

// // Button ga quloq solamiz va button bosilganda Body ga dark class ni qo'shamiz yoki olib tashlaymiz (toggle yordamida):
// elLightDarkToggleButton.addEventListener('click', function(){
//   elBody.classList.toggle('dark');
// });


// Yangi e'lon qo'shish modali:

var elNewPosterForm = $_('.js-new-poster-form');

var elResultsList = $_('.js-results-list');

var elNewPosterTemplate = $_('.js-poster-item-template').content;

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

  posters.push({
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

  var newPosterFragment = document.createDocumentFragment();

  posters.forEach(function(poster) {

    var elNewPosterItem = elNewPosterTemplate.cloneNode(true);

    $_('.js-poster-item-title', elNewPosterItem).textContent = poster.title;
    $_('.js-poster-item-company-name', elNewPosterItem).textContent = poster.company_name;
    $_('.js-poster-item-time', elNewPosterItem).textContent = poster.work_hours;
    $_('.js-poster-item-region', elNewPosterItem).textContent = poster.region;

    newPosterFragment.appendChild(elNewPosterItem);
  });

  elResultsList.appendChild(newPosterFragment);
});




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
