import "reflect-metadata"; // required by inversify
import { Container } from "inversify";
import { Hello } from "./usecase";

const container = new Container({ defaultScope: "Singleton" });

// usecases
container.bind<Hello>(Hello).to(Hello);

export { container };
