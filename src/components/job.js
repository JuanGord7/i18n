import React from "react";
import {FormattedDate, FormattedMessage} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>
        <FormattedMessage id={props.offer.name} />
      </td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedMessage
          id="Million"
          values={{ salary: props.offer.salary }}
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>{props.offer.views.toLocaleString()}</td>
    </tr>
  );
};

export default Job;
