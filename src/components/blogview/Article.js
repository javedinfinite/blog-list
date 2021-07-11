import React from "react";
import Localbase from "localbase";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current: null
    };
    this.db = new Localbase("db");
  }

  add(name) {
    this.db.collection("user").add({ name });

    const { data } = this.state;
    data.push(name);
    this.setState({ data: [...data] });
  }

  componentDidMount() {
    this.db
      .collection("user")
      .get()
      .then((users) => {
        this.setState({ data: users });
      });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.data.length > 0 ? (
            <div>
              {this.state.data.map((o, i) => (
                <p key={i}>{o.name}</p>
              ))}
            </div>
          ) : (
            "Loading ..."
          )}
        </h1>
        <input
          type="text"
          onChange={(e) => this.setState({ current: e.target.value })}
        />
        <button onClick={() => this.add(this.state.current)}>Add item</button>
      </div>
    );
  }
}

export default App;