import React from "react";
import { Button, } from "semantic-ui-react"

const Card = ({ id, front, back, remove }) => (
<div>
        {front} <br />
        {back} <br />
        <Button color="blue" onClick={() => remove(id)}>Delete</Button>
      </div>
);

export default Card;