import styles from "./Paginated.module.css";

const Paginated = ({ actualPage, setPage, pages }) => {

	function handleClick({target}){
		if(target.id === 'previous' && actualPage > 1)
			setPage(actualPage-1);
		else if(target.id === 'next' && actualPage < pages)
			setPage(actualPage+1);
	}

  return (
    <div className={styles.paginate}>
      <button id='previous' onClick={handleClick}>{'<'}</button>
      <span className={styles.page}>{actualPage}</span>
      <button id='next' onClick={handleClick}>{'>'}</button>
    </div>
  );
};

export default Paginated;
