import { Validator } from '../validator';

test('передано корректное значение с заглавным началом и концом', () => {
    const str = 'Doctor-Van_HelsinG';
    const object = new Validator(str);
    expect(object.name).toBe(str);
});

test('передано корректное значение с началом и концом нижнем регистре', () => {
    const str = 'doctor-Van_Helsing';
    const object = new Validator(str)
    expect(object.name).toBe(str);
});

test('передано значение, начинающееся с цифры', () => {
    const str = '1Doctor-Van_HelsinG';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение, оканчивающееся с цифрой', () => {
    const str = 'Doctor-Van_Helsing1';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение, начинающееся с _', () => {
    const str = '_Doctor-Van_Helsing';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение, оканчивающееся на _', () => {
    const str = 'Doctor-Van_Helsing_';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение, начинающееся с -', () => {
    const str = '-Doctor-Van_Helsing';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение, оканчивающееся на -', () => {
    const str = 'Doctor-Van_Helsing-';
    expect(() => new Validator(str)).toThrow();
})

test('передано значение с темя цифрами подряд', () => {
    const str = 'Doctor-123Van_Helsing';
    expect(() => new Validator(str)).toThrow();
})