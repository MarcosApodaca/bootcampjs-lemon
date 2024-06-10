import { validarFormatoIban,  } from "./main";
describe("validarFormatoIban", () => {
 test.each([
 ["ES21 1465 0100 72 2030876293", true],
 ["ES21-1465-0100-72-2030876293", true],
 ["ES2114650100722030876293", true],
 ["6621000418401234567891", false],
 ["ES6621000418401234567891", true],
 ])(
 "Deberia devolver para El IBAN %s el valor %s",

 (valor: string, expected: boolean) => {
 expect(validarFormatoIban(valor)).toBe(expected);
 }
 );
});
