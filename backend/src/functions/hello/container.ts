import "reflect-metadata"; // required by inversify
import { Container, injectable } from "inversify";
import { TYPES } from "@/config/dependency/types";
import { Hello } from "./usecase";
import type { IHelloDepend } from "@/types/interface.d";

const container = new Container({ defaultScope: "Singleton" });

// usecases
container.bind<Hello>(TYPES.Hello).to(Hello);

@injectable()
class HelloDepend implements IHelloDepend {
  say(word: string): string {
    return `${word} desuyo`;
  }
}
container.bind<IHelloDepend>(TYPES.HelloDepend).to(HelloDepend);

export { container };
