class Character {
  public name: string
  public race: string
  public weapon: string
  public armor: string

  constructor() {
    this.name = ''
    this.race = ''
    this.weapon = ''
    this.armor = ''
  }

  describe() {
    console.log(
      `
       Character: ${this.name}, 
       Race: ${this.race},
       Weapon: ${this.weapon}, 
       Armor: ${this.armor}`
    )
  }
}

interface CharacterBuilder {
  setName(name: string): void
  setRace(race: string): void
  setWeapon(weapon: string): void
  setArmor(armor: string): void
  getResult(): Character
}

class CharacterBuilderImpl implements CharacterBuilder {
  private character: Character = new Character()

  setName(name: string) {
    this.character.name = name
  }

  setRace(race: string) {
    this.character.race = race
  }

  setWeapon(weapon: string) {
    this.character.weapon = weapon
  }

  setArmor(armor: string) {
    this.character.armor = armor
  }

  getResult() {
    return this.character
  }
}

class CharacterDirector {
  private builder: CharacterBuilder

  constructor(builder: CharacterBuilder) {
    this.builder = builder
  }

  constructKnightCharacter() {
    this.builder.setName('Sir Galahad')
    this.builder.setRace('Human')
    this.builder.setWeapon('Sword')
    this.builder.setArmor('Plate Mail')
  }

  constructWizardCharacter() {
    this.builder.setName('Merlin')
    this.builder.setRace('Elf')
    this.builder.setWeapon('Staff')
    this.builder.setArmor('Robe')
  }
}

const builder = new CharacterBuilderImpl()
const director = new CharacterDirector(builder)

director.constructKnightCharacter()
const knightCharacter = builder.getResult()
knightCharacter.describe()

director.constructWizardCharacter()
const wizardCharacter = builder.getResult()
wizardCharacter.describe()
