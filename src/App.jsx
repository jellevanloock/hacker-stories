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

function App() {
    return (
        <div>
            <h1>My Hacker Stories</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />

            <hr />

            <ul>
                {list.map((el, i) => {
                    {
                        /* only use an index as last resort */
                    }
                    return (
                        <li key={el.objectID}>
                            <p></p>
                            <span>
                                <a href={el.url}>{el.title}</a>
                            </span>
                            <span>{el.author}</span>
                            <span>{el.num_comments}</span>
                            <span>{el.points}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
