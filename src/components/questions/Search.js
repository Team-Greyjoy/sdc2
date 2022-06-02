import React from 'react';

function Search({
  id, value, type = 'text', onInputChange,
}) {
  return (
    <section>
      <label htmlFor={id}>
        Questions & answers
        <input
          id={id}
          type={type}
          value={value}
          placeholder="Have a question? Search for answers..."
          onChange={onInputChange}
        />
      </label>
    </section>
  );
}

export default Search;
