const validate = {};

validate.Name = (name) => {
  return !!name.toLowerCase().match(/^[a-zA-Zа-яА-Я-\s]+$/);
};

validate.Email = (email) => {
  return !!email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

validate.Password = (password) => {
  return password.length > 7;
};

export default validate;
