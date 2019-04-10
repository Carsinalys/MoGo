export default (state, action) => {
  let currentPage = 1;
  const {type} = action;
  switch (type) {
    case 'main': return currentPage = 1;
    case 'about': return currentPage = 2;
    case 'work': return currentPage = 3;
    case 'blog': return currentPage = 4;
    case 'contacts': return currentPage = 5;
    case 'intro': return currentPage = 6;
  }

  return currentPage
}