import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Age</th><th>Email</th><th>Gender</th><th>ID</th><th>&nbsp</th></tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}><td>{person.name}</td><td>{person.age}</td><td>{person.email}</td><td>{person.gender}</td><td>{person.id}</td>
            <td>
            <span style={{ fontSize: "smaller" }}>
                <a href="/#" onClick={(e) => { e.preventDefault(); editPerson(person.id) }}> (delete, </a>
                <a href="/#" onClick={(e) => { e.preventDefault(); deletePerson(person.id) }}> edit) </a>
              </span>
            </td>

            
            
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
