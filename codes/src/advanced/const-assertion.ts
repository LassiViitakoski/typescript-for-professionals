const dave = {
  name: 'dave',
  role: 'drummer',
  skills: ['drumming', 'headbanging'],
};

// All this is ok
dave.name = 'grohl';
dave.role = 'singer';
dave.skills.unshift('singing');

const david = {
  name: 'david',
  role: 'drummer',
  skills: ['drumming', 'headbanging'],
} as const;

// Error because of marked 'as const'
// 'as const' marks object properties to readonly values
// david.name = 'grohl';
// david.role = 'singer';
// david.skills.unshift('singing');

function layout(settings: {
  align: 'left' | 'center' | 'right';
  padding: number;
}) {
  console.log('Performing layout:', settings);
}

const example1 = { align: 'left', padding: 0 } as const;
const example2 = { align: 'left' as const, padding: 0 };

// Gives error if example not marked 'as const'
// because string is not assignable to 'left' | 'center' | 'right'
layout(example1);
layout(example2);
