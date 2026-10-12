import "./App.css";

function Header(props){
    return (
        <header>
            <h1>{props.name}'s Workspace</h1>
            <p>Copyright {props.year}</p>
        </header>
    );
}

function App() {
return (
    <div>
        <Header name="Tamang" year={new Date().getFullYear()} />
        <main>
            <h2>Welcome! to my workspace, How can I help you?</h2>
        </main>
    </div>
    );
}
export default App;
