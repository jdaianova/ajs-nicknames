export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-zA-Z]([\w-][0-9]{0,3})+[a-zA-Z]$/.test(this.name);
  }
}
