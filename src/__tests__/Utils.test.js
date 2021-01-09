import { Embaralhar } from '../src/helpers/utils'

const mockData = [
  { id: 1, content: `Emoticos` },
  { id: 2, content: `Imagens` },
  { id: 3, content: `Cores`,},
]

test('test embaralhar', () => {
  const embarado = Embaralhar(mockData);
  expect(mockData).not.toBe(embarado);
});

test('test embaralhar quantidade de valores', () => {
  const embarado = Embaralhar(mockData);
  expect(mockData.length).toBe(embarado.length);
});

test('test null', () => {
  const embarado = Embaralhar(null);
  expect(null).not.toBe(embarado);
});