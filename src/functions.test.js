import functions from './functions';

test('adds two integer', () => {
    expect(functions.sum(1, 2)).toBe(3);
});

test('subtracts two integer', () => {
    expect(functions.substract(2, 1)).toBe(1);
});

test('multiplies two integer', () => {
    expect(functions.multiply(1, 2)).toBe(2);
});

test('divides two integer', () => {
    expect(functions.divide(4, 2)).toBe(2);
});

test('data assignement', () => {
    const object = { firstname: 'Marc' };
    object['lastname'] = 'Charpentier';
    expect(object).toEqual({firstname: 'Marc', lastname: 'Charpentier'});
});

test('the number can\'t be equal to 11', () => {
    for (let number = 0; number < 11; number++) {
        expect(number).not.toBe(11);
    }
});

test('the array has Zidane in it', () => {
    const frenchPlayers = [
        'Henry',
        'Platini',
        'Trezeguet',
        'Zidane',
        'Mbappe',
    ];
    expect(frenchPlayers).toContain('Zidane');
});