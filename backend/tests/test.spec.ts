import "reflect-metadata"; // required by inversify
import { Container, injectable } from "inversify";
import { TYPES } from "@/config/dependency/types";
import type { IHelloDepend } from "@/types/interface.d";
import { Hello } from "@/functions/hello/usecase";

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

describe("first", () => {
  test("should first", () => {
    const hello = container.get<Hello>(TYPES.Hello);
    expect(hello instanceof Hello).toBe(true);
  });
});
