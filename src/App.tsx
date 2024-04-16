import Component from './starter/02-props/index';

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component name='peter' age={28} />
      <Component name='peter' age={28}>
        <h2>Hello World</h2>
      </Component>
    </main>
  );
}

export default App;
