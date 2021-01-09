import { createContext } from 'react'

export const ScoreViewContext = createContext(0)

export const Colors = {
  main: '#f87901',
  textColor: '#16171A',
  card: '#f87901',
  progress: '#a5a5a5',
  backgroundMain: '#fcc169',
  with: '#f0f0f0'
};

export const ColorButtons = {
  primary: '#2196F3',
  danger: '#f33a21'
}

export function Embaralhar(data = []) {
  if(!data) return []
  const valueMaximo = data.length
  const sequenci = [];
  while (sequenci.length < valueMaximo) {
    const number = Math.ceil(Math.random() * valueMaximo) -1;
    if (sequenci.indexOf(number) < 0) {
      sequenci.push(number)
    }
  }
  return sequenciarPairs(data, sequenci);
}

export function sequenciarPairs(data = [], sequenci = []) {
  const result = sequenci.map((e, i) => {
    return data[e]
  })
  return result;
}