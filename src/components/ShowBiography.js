import React from "react";

function TableRow (props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.event}</td>
    </tr>
  );
}

export function ShowBiography (props) {
  const renderRow = (year, event) => (
    <TableRow year={year} event={event} key={year} />
  );

  return (
    <section id="biography">
      <h2>{props.header}</h2>

      <table>
        <thead>
          <tr>
            <th onClick={props.handleYearClick}>Дата</th>
            <th onClick={props.handleEventClick}>Событие</th>
          </tr>
        </thead>

        <tbody id="biography-content">
          {props.biography.map((row) => renderRow(...row))}
        </tbody>
      </table>

      <form>
        <input type="text" name="year" placeholder="Enter year:" />
        <input type="text" name="biography-event" placeholder="Enter event:" id="inputEvent" />

        <button type="submit">Добавить запись</button>
        <button type="submit">Удалить последнюю запись</button>
      </form>
      
    </section>
  );
}
