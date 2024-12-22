import { faker } from "@faker-js/faker";

function CreateRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export { CreateRandomPost };
