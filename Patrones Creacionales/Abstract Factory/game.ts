// Definición de interfaces para los productos
interface Personaje {
  nombre: string
  ataque(): void
}

interface Arma {
  nombre: string
  usar(): void
}

// Fábrica Abstracta
interface FabricaJuego {
  crearPersonaje(): Personaje
  crearArma(): Arma
}

// Implementación de productos concretos
class Guerrero implements Personaje {
  nombre = 'Guerrero'
  ataque() {
    console.log(`${this.nombre} ataca con su espada.`)
  }
}

class Mago implements Personaje {
  nombre = 'Mago'
  ataque() {
    console.log(`${this.nombre} lanza un hechizo.`)
  }
}

class Espada implements Arma {
  nombre = 'Espada'
  usar() {
    console.log(`${this.nombre} corta a través del enemigo.`)
  }
}

class VaritaMagica implements Arma {
  nombre = 'Varita Mágica'
  usar() {
    console.log(`${this.nombre} lanza destellos mágicos.`)
  }
}

// Implementación de la fábrica concreta para crear personajes y armas mágicas
class FabricaMagica implements FabricaJuego {
  crearPersonaje() {
    return new Mago()
  }

  crearArma() {
    return new VaritaMagica()
  }
}

// Implementación de la fábrica concreta para crear personajes y armas de combate físico
class FabricaGuerreros implements FabricaJuego {
  crearPersonaje() {
    return new Guerrero()
  }

  crearArma() {
    return new Espada()
  }
}

// Uso del patrón Abstract Factory
function jugar(fabrica: FabricaJuego) {
  const personaje = fabrica.crearPersonaje()
  const arma = fabrica.crearArma()

  console.log(
    `Has seleccionado a ${personaje.nombre} con ${arma.nombre}. ¡A la batalla!`
  )
  personaje.ataque()
  arma.usar()
}

// Crear y jugar con personajes y armas mágicas
const fabricaMagica = new FabricaMagica()
jugar(fabricaMagica)

// Crear y jugar con personajes y armas de combate físico
const fabricaGuerreros = new FabricaGuerreros()
jugar(fabricaGuerreros)
