import { inject, injectable } from "inversify";
import { TYPES } from "@/config/dependency/types";
import type { IHelloDepend } from "@/types/interface.d";

@injectable()
export class Hello {
  constructor(
    @inject(TYPES.HelloDepend)
    private HelloDepend: IHelloDepend
  ) {}

  invoke(name: string, event): any {
    const word = this.HelloDepend.say("konnichiwa");
    const res = {
      message: `Hello ${name}!, ${word}`,
      event,
    };
    return res;
  }
}
