import "./index.scss";
const world = "world";

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(world);
  console.log(hello("test"));
});
