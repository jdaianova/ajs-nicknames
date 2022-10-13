export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-zA-Z]+[\w-]*[^\d{4,}]*[a-zA-Z]+$/.test(this.name);
  }
}
