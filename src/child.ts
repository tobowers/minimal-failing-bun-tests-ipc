console.log("child launched")

process.send?.("Hello from child as string");
process.send?.({ message: "Hello from child as object" });

process.on("message", (message) => {
  // print message from parent
  console.log("child.ts: ", message);
});