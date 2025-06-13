/*
If a variable has no link with the function component then define it outside of the component
which avoids re-defining it on every function call
*/
const title = `React`;

function App() {
    // you can do something in between

    return (
        <div>
            <h1>Hello {title}</h1>
        </div>
    );
}

export default App;
