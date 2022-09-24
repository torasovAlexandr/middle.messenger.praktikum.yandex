export const template = (chatList: {[key: string]: any}) =>
  `<div>
{{{newChat}}}
${Object.keys(chatList).reduce(
  (prev, cur) => `${prev}{{{${cur}}}}`,
  ''
)}</div>`;
