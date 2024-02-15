export const convertFileSize = (size: number) => {
  const def = [
    [1, 'octets'],
    [1024, 'ko'],
    [1024 * 1024, 'Mo'],
    [1024 * 1024 * 1024, 'Go']
  ]
  for (let i = 0; i < def.length; i++) {
    // @ts-ignore
    if (size < def[i][0]) return (size / def[i - 1][0]).toFixed(2) + ' ' + def[i - 1][1]
  }
}
