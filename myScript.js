// myscript.js
function MyApp() {
    return <h1>Hello, world!</h1>;
}

function MyApp1() {
    return <h1>Hello, worlds!<br /><span>Yes</span></h1>;
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

function MyApplication() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
