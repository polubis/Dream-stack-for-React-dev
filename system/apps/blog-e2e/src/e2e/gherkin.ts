type Commands = Record<string, (...args: unknown[]) => void>;

function Gherkin<C extends Commands>(commands: C) {
  function Given<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);
    return {
      Then,
      When,
      And,
    };
  }

  function Then<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      And,
      When,
    };
  }

  function When<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      And,
      Then,
    };
  }

  function And<K extends keyof C>(key: K, ...args: Parameters<C[K]>) {
    commands[key](...args);

    return {
      Then,
      When,
      And,
    };
  }

  return { Given };
}

export { Gherkin };
