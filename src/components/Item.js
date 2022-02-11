import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core/';

export const Item = ({ key, name, details }) => {
    return (
        <ListItem button={true} onClick={() => console.log(`Categoria ${name} clicada`)} >
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export const ItemV2 = ({ key, name, details }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label={name} />
        </FormGroup>
    )
}

// export default Item;
