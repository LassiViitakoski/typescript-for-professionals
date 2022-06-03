// // @ts-ignore
// type Square = {
//   kind: 'square';
//   size: number;
// };

// // @ts-ignore
// type Rectangle = {
//   kind: 'rectangle';
//   width: number;
//   height: number;
// };

// // @ts-ignore
// type Shape = Square | Rectangle;

// // @ts-ignore
// const area = (shape: Shape) => {
//   // @ts-ignore
//   if (shape.kind === 'square') {
//     // @ts-ignore
//     return shape.size * shape.height;
//   }

//   // @ts-ignore
//   if (shape.kind === 'rectangle') {
//     // @ts-ignore
//     return shape.width * shape.height;
//   }
// };

type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationFailure = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

const logResult = (result: ValidationResult) => {
  switch (result.isValid) {
    case true:
      console.log("Success, validated value:", result.validatedValue);
      break;
    case false:
      console.error("Failure, error reason:", result.errorReason);
      break;
  }
};
