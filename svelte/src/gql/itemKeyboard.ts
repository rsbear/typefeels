export const itemKeyboard = `
query Keyboard($alias: String){
  getKeyboard(alias:$alias) {
    about
    alias
    angle
    brand
    connection
    firmware
    id
    images_posters
    images_thumbs
    mount
    name
    pcb
    size
    stage
  }
}
`;
