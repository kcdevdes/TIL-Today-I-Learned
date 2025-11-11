async function test() {
  await setTimeout(() => {
    console.log("Hello! 1");
  }, 100);
  await setTimeout(() => {
    console.log("Hello! 2");
  }, 100);
  await setTimeout(() => {
    console.log("Hello! 3");
  }, 100);
  await setTimeout(() => {
    console.log("Hello! 4");
  }, 1000);
  await setTimeout(() => {
    console.log("Hello! 5!");
  }, 2000);
  await setTimeout(() => {
    console.log("Hello! 4");
  }, 100);
}

test();