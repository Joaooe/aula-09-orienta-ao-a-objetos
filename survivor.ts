import { level } from "./level";

export class Survivor {
  protected level: level;   // Propriedade level do tipo Level

  constructor(level: level = level.blue) {
    this.level = level;
  }

  // Método para obter o nível do sobrevivente
  getLevel(): level {
    return this.level;
  }

  // Método para subir de nível
  levelUp(): level | null {
    // Obtém o próximo nível baseado no nível atual
    const nextLevel = this.getNextLevel();

    // Verifica se o próximo nível existe
    if (nextLevel !== null) {
      this.level = nextLevel;   // Define o próximo nível como o novo nível
      return this.level;        // Retorna o novo nível
    } else {
      console.log("Não há próximo nível disponível.");
      return null;
    }
  }

  // Método auxiliar para obter o próximo nível
  private getNextLevel(): level | null {
    switch (this.level) {
      case level.blue:
        return level.Yellow;
      case level.Yellow:
        return level.Red;
      case level.Red:
     
        return null; // Não há próximo nível após o nível verde
    }
  }
}

const survivor = new Survivor();
console.log(survivor.getLevel()); 

console.log(survivor.levelUp());
console.log(survivor.levelUp());