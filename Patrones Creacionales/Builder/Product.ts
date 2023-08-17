class Product {
  private parts: string[] = []

  addPart(part: string) {
    this.parts.push(part)
  }

  listParts() {
    //@ts-ignore
    const formatter: string = new Intl.ListFormat('en').format(this.parts)
    console.log(`Product parts: ${formatter}`)
  }
}

interface Builder {
  buildPartA(): void
  buildPartB(): void
  buildPartC(): void
  getResult(): Product
}

class ConcreteBuilder implements Builder {
  private product: Product = new Product()

  buildPartA() {
    this.product.addPart('Part A')
  }

  buildPartB() {
    this.product.addPart('Part B')
  }

  buildPartC() {
    this.product.addPart('Part C')
  }

  getResult() {
    return this.product
  }
}

class Director {
  private builder: Builder

  constructor(builder: Builder) {
    this.builder = builder
  }

  construct() {
    this.builder.buildPartA()
    this.builder.buildPartB()
    this.builder.buildPartC()
  }
}

// Uso del patrón Builder
const builder = new ConcreteBuilder()
const director = new Director(builder)

director.construct()
const product = builder.getResult()
product.listParts()
