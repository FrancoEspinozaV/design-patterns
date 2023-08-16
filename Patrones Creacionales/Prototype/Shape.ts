// Definición de la clase base FiguraGeometrica
class FiguraGeometrica {
  public tipo: string
  constructor(tipo: string) {}

  calcularArea() {
    throw new Error('Método calcularArea no implementado')
  }
}

// Definición de la clase Circulo que hereda de FiguraGeometrica
class Circulo extends FiguraGeometrica {
  public radio: number
  constructor(radio: number) {
    super('Círculo')
  }

  calcularArea() {
    return Math.PI * this.radio ** 2
  }
}

// Definición de la clase Rectangulo que hereda de FiguraGeometrica
class Rectangulo extends FiguraGeometrica {
  public base: number
  public altura: number
  constructor(base: number, altura: number) {
    super('Rectángulo')
  }

  calcularArea() {
    return this.base * this.altura
  }
}

// Ejemplo de uso
const circulo = new Circulo(5)
const rectangulo = new Rectangulo(4, 8)

console.log(`${circulo.tipo} - Area: ${circulo.calcularArea()}`)
console.log(`${rectangulo.tipo} - Area: ${rectangulo.calcularArea()}`)
