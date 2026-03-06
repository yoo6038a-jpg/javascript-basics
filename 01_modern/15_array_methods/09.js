function validateForm(fields) {
  // 모든 필드가 비어있지 않은가?
  return fields.every((field) => field.value.trim() !== "");
}

const form1 = [
  { name: "username", value: "hong" },
  { name: "password", value: "1234" },
];

const form2 = [
  { name: "username", value: "hong" },
  { name: "password", value: "" },
];

console.log(validateForm(form1)); // true
console.log(validateForm(form2)); // false
