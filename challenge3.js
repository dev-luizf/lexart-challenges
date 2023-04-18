// Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
// Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric
// The default is a string: "XXXX-AAAA-BBBB-CCCC"
// The result must be stored in a variable. For example:
// $id = generarId()
// id is ~ abc1-bb12-234a-bcc2

function generarId() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    if (i < 3) {
      id += "-";
    }
  }
  return id;
}

const id = generarId();
console.log(id);
