type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContactDetails = Person & Email & Phone;

const contact = (details: ContactDetails) => {
  console.log(details.name, details.email, details.phone);
};

contact({
  name: 'John',
  email: 'joh@example.com',
  phone: '1144',
});
