class Intancecounter {
  private static instanceCounter: Intancecounter
  private counter: number = 0

  private constructor() {}

  public static getInstance(): Intancecounter {
    if (!Intancecounter.instanceCounter) {
      Intancecounter.instanceCounter = new Intancecounter()
    }
    Intancecounter.instanceCounter.incrementCount()
    return Intancecounter.instanceCounter
  }

  private incrementCount(): void {
    this.counter++
  }

  public static getCounter(): number {
    return Intancecounter.instanceCounter.counter
  }
}

const Intancecounter1 = Intancecounter.getInstance()
const Intancecounter2 = Intancecounter.getInstance()
const Intancecounter3 = Intancecounter.getInstance()

console.log('Instances Creates: ', Intancecounter.getCounter())
