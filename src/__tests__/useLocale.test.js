import useLocale from "../src/locale/hooks/useLocale";

test('test hook useLocale - key not exists', () => {
    const value = `header.text`
    const text = useLocale(`header.text`);
    expect(text).toBe(value);
});

test('test hook useLocale - keyString incompleta', () => {
    const value = `header.page`
    const text = useLocale(value);
    expect(text).not.toBeInstanceOf(Object);
    expect(text).toBe(value);
});

test('test hook useLocale - keyString', () => {
    const value = `header.page.main`
    const text = useLocale(value);
    expect(text).not.toBe(value);
});
