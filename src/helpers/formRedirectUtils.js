function identificationDataExists() {
  const emailRegex = /^[A-Z0-9._%+-]+@redberry\.ge$/i;
  const first_name =
    localStorage.getItem('first_name') &&
    localStorage.getItem('first_name').length > 2;
  const last_name =
    localStorage.getItem('last_name') &&
    localStorage.getItem('last_name').length > 2;
  const email = emailRegex.test(localStorage.getItem('email'));

  return Boolean(first_name && last_name && email);
}

function covidDataExists() {
  const had_covid = localStorage.getItem('had_covid');
  let had_antibody_test = true;
  let covid_sickness_date = true;

  if (had_covid === 'yes') {
    had_antibody_test = localStorage.getItem('had_antibody_test');
    if (had_antibody_test === 'არა') {
      covid_sickness_date = localStorage.getItem('covid_sickness_date');
    }
  }

  return Boolean(had_covid && had_antibody_test && covid_sickness_date);
}

export { identificationDataExists, covidDataExists };
