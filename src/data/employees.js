import { faker } from "@faker-js/faker";

const generateMockEmployee = () => {
  const startDate = faker.date
    .between({
      from: "2010-01-01",
      to: "2023-07-26",
    })
    .toISOString()
    .split("T")[0];

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate(),
    startDate,
    department: faker.helpers.arrayElement([
      "IT",
      "HR",
      "Finance",
      "Marketing",
      "Sales",
    ]),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zipCode: faker.location.zipCode().slice(0, 5),
    },
  };
};

export default function () {
  const mockData = Array.from({ length: 30 }, generateMockEmployee);
  console.log([...mockData]);
  localStorage.setItem("employees", JSON.stringify([...mockData]));
  window.location.reload();
}
