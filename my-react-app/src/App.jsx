import "./App.css";

function Header(name, year){
    return (
        <header>
            <h1>{name}'s Workspace</h1>
            <p>Copyright {year}</p>
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
