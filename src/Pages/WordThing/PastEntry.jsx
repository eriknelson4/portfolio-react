function PastEntry({ entry }) {

  const classList = ['wrong', 'partial', 'correct'];

  return (

    <div className="past-entry">
      {
        entry.map((letter, i) => {
          return (
            <div key={ i } className={`letter ${classList[letter[1]]}`} >
              <span>{ letter[0] }</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default PastEntry;