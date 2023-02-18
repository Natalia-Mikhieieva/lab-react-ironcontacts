import "./App.css";
import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture </th>
            <th>Name </th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" height="100px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
