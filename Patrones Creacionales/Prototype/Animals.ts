class Animal {
  constructor(public tipo: string) {}

  caminar(): void {
    throw Error('Metodo no implementado')
  }
}

class Perro extends Animal {
  constructor(public patas: number) {
    super('Perro')
  }

  caminar(): string {
    return `camina muy feliz en ${this.patas} patas`
  }
}

class Loro extends Animal {
  constructor(public patas: number) {
    super('Loro')
  }

  caminar(): string {
    return `camina muy feliz en ${this.patas} patas`
  }
}

const sultan = new Perro(4)
const thor = new Loro(2)

console.log(sultan.caminar())
console.log(thor.caminar())
