/********************************************************************
 * File Name:
 * Date:
 * Description:
 * Author(s): CS 362-Team 20
 ********************************************************************/

function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
    return num1 - num2;
}

// Checking for 1 + 1 != 2
test("1 + 1 = 2", () => {
  expect(sum(1, 2)).not.toBe(2);
});

// Checking for 1 - 1 = 0
test("1 - 1 = 0", () => {
  expect(difference(1,1)).toBe(0);
});
