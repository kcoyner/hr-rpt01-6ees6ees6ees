class RetiredForagerBee extends ForagerBee {
  constructor(age, job, color, canFly) {
    super(age, job, color, canFly)
    this.age = 40
    this.job = 'gamble'
    this.color = 'grey'
    this.canFly = false
  }
  forage () {
    return 'I am too old, let me play cards instead';
  }
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
};
