import React from 'react';

// export const App: React.FC = () => {
//   const [lastKey, setLastKey] = useState<string | null>(null);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       setLastKey(event.key);
//     };

//     window.addEventListener('keydown', handleKeyDown);
//   }, [lastKey]);

//   return (
//     <div className="App">
//       <p className="App__message">
//         {lastKey
//           ? `The last pressed key is [${lastKey}]`
//           : 'Nothing was pressed yet.'}
//       </p>
//     </div>
//   );
// };

type State = {
  lastKey: string | null;
};
export class App extends React.Component<State> {
  state: State = {
    lastKey: null,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
