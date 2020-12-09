export const createKeyboard = `
mutation ($input: [AddKeyboardInput!]!) {
  addKeyboard (input: $input) {
    keyboard {
      id
      name
    }
  }
}
`;
