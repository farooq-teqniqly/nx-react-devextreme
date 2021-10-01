import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';

const sayHelloWorld = () => {
  alert('Hello world!');
};

export function App() {
  return (
    <div>
      <Button text="Click me" onClick={sayHelloWorld} />
    </div>
  );
}

export default App;
