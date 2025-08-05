import ListItem from './ListItem';

const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export default function List() {
  return (
    <ul>
      {list.map(listItem => {
        {
          /* only use an index as last resort */
        }
        return <ListItem item={listItem} />;
      })}
    </ul>
  );
}
