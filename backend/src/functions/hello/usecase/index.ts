class Hello {
  constructor() {}

  invoke(name, event): any {
    const res = {
      message: `Hello ${name}!, fghfghfhgt`,
      event,
    };
    return res;
  }
}

export { Hello };
