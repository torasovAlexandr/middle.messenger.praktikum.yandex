export const template = (chatList: {[key: string]: any}) =>
  `<div>${Object.keys(chatList).reduce(
    (prev, cur) => `${prev}{{{${cur}}}}`,
    ''
  )}</div>`;
