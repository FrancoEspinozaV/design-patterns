// Clase base de los enemigos
abstract class Enemy {
  abstract getDamage(): number
  abstract getDescription(): string
}

// Tipos concretos de enemigos
class Zombie extends Enemy {
  getDamage(): number {
    return 10
  }

  getDescription(): string {
    return 'Zombie'
  }
}

class Skeleton extends Enemy {
  getDamage(): number {
    return 5
  }

  getDescription(): string {
    return 'Skeleton'
  }
}

// Interfaz para la fábrica de enemigos
interface EnemyFactory {
  createEnemy(): Enemy
}

// Fábricas concretas de enemigos
class ZombieFactory implements EnemyFactory {
  createEnemy(): Enemy {
    return new Zombie()
  }
}

class SkeletonFactory implements EnemyFactory {
  createEnemy(): Enemy {
    return new Skeleton()
  }
}

// Uso del patrón Factory Method
function simulateBattle(factory: EnemyFactory) {
  const enemy = factory.createEnemy()
  console.log(`A wild ${enemy.getDescription()} appeared!`)
  console.log(`It deals ${enemy.getDamage()} damage.`)
}

// Simulación de batalla con diferentes tipos de enemigos
console.log('Battle against a Zombie:')
simulateBattle(new ZombieFactory())

console.log('\nBattle against a Skeleton:')
simulateBattle(new SkeletonFactory())
