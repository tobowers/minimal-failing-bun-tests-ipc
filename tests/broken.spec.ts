import "dotenv/config"
import { describe, it } from "bun:test";

describe("Broken IPC", () => {
  it("illustrates a crash", async () => {
    const childProc = Bun.spawn(["bun", "./src/child.ts"], {
      ipc(message, childProc) {
        /**
         * The message received from the sub process
         **/
        console.log("message", message)
        childProc.send("Respond to child")
      },
      stdout: "inherit",
    });
    
    await new Promise<void>((resolve) => setTimeout(resolve, 150))
    
    childProc.send("I am your father"); // The parent can send messages to the child as well
    
    await new Promise<void>((resolve) => setTimeout(resolve, 150))
    
    
    childProc.kill()
  })
})