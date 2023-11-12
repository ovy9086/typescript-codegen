import { components } from "../dist/schema";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 flex-1">
      <div>Hello</div>
    </main>
  );
}

type User = components["schemas"]["User"];

function getUser(): User {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@mail.co",
  };
}

function greetUser() {
  const user = getUser();
  console.log(`Hello ${user.firstName} ${user.lastName}`);
}

function emailOrderToUser(orderId: number) {
  const user = getUser();
  sendEmail(
    `Thank you
     ${user.firstName} ${user.lastName}
     for placing your order with us!`
  );
}

const API_URL = "https://api.co";

async function fetchUserData() {
  const response = await fetch(API_URL + "/userinfo");

  const userInfo: User = await response.json();

  return userInfo;
}

function sendEmail(text: string) {}
function print(text: string) {}
