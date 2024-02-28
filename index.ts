import { level } from "./level";
import { survivor} from "./survivor";

let newsurvivor= new survivor();
console.log(newsurvivor.getlevel());


newsurvivor.levelUp();
console.log(newsurvivor.getlevel());