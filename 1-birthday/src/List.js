import React from 'react';

const List = ({ peoples }) => {
  return peoples.map(({id, name, image, age}) => (
    <article key={id} className="person">
      <img src={ image } alt={ name } />
      <div>
        <h4>{ name }</h4>
        <p>{ age } years</p>
      </div>
    </article>
  ));
};

export default List;
