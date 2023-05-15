function identificationDataExists() {
  const emailRegex = /^[A-Z0-9._%+-]+@redberry\.ge$/i;

  const first_name =
    localStorage.getItem('first_name') &&
    localStorage.getItem('first_name').length > 2;
  const last_name =
    localStorage.getItem('last_name') &&
    localStorage.getItem('last_name').length > 2;
  const email = emailRegex.test(localStorage.getItem('email'));

  return !!(first_name || last_name || email);
}

export { identificationDataExists };
