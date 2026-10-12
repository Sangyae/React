import "./App.css";

function Header({name, year}){
    return (
        <header>
            <h1>{name}'s Workspace</h1>
            
        </header>
    );
}

const items = ["Home", "About", "Contact"];

function Main(){
    return (
        <div>
            <main>
                <h2>Welcome! to my workspace, How can I help you?</h2>
            </main>
            <ul>
                {items.map((item) => 
                    <li style={{listStyleType: "none"}}>{item}</li>)}
            </ul>
        </div>
    );
}
function Footer({year}){
    return (
        <footer>
            <p>Copyright {year}</p>
        </footer>
    );
}
function App() {
return (
    <div>
        <Header name="Tamang"/>
        <Main repair = {items}/>
        <Footer year={new Date().getFullYear()} />
    </div>
    );
}
export default App;
