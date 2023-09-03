import './Pagination.scss';

const Pagination = ({ setUsersPerPage, usersPerPage, totalUsers, currentPage, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  let activeNumbers = [...pageNumbers];
  let numberArray = [];
  if (activeNumbers.length > 7) {
    if (currentPage > activeNumbers.length - 6) {
      numberArray = activeNumbers.slice(activeNumbers.length - 6, activeNumbers.length);
      numberArray.unshift(0);
    } else {
      numberArray = activeNumbers.slice(currentPage - 1, currentPage + 4);
      numberArray.push(0);
      numberArray.push(activeNumbers[activeNumbers.length - 1]);
      if (currentPage != 1) {
        numberArray.unshift(0);
      }
    }
  } else {
    numberArray = [...activeNumbers]
  }

  const pageSize = (newSize) => {
    let maxPage = Math.ceil(totalUsers / newSize);
    let newPage = currentPage;
    if (currentPage > maxPage) { newPage = maxPage; }
    setUsersPerPage(newSize);
    if (newPage != currentPage) {
      paginate(newPage);
    }
  }

  return (
    <nav className="pagination">

      <button key='back' disabled={ (currentPage == 1) } onClick={ () => paginate(currentPage - 1) } className="page-link">
        &laquo;
      </button>
      {
        numberArray.map((number, i) => {
          if (number == 0) {
            return ( <span key={ `ellipsis-${ i }` } className="ellipsis">...</span> )
          }
          return (
            <button key={ `page-${number}` } onClick={ () => paginate(number) } className="page-link short" aria-selected={ (currentPage == number) }>
              { number }
            </button>
          )
        })
      }
      <button key='forward' disabled={ (currentPage == pageNumbers.length) } onClick={ () => paginate(currentPage + 1) } className="page-link">
        &raquo;
      </button>

      <div className="page-size">
        <label htmlFor="page-size-control">Page Size</label>
        <select onChange={ (e) => { pageSize(e.currentTarget.value); } } id="page-size-control">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

    </nav>

  );
}

export default Pagination;