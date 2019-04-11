export default (count = 1597, action) => {
  const {type} = action;

  switch (type) {
    case 'like': return count + 1
  }

  return count
}