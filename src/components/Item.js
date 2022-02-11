import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core/';

export const Item = ({ key, name, details }) => {
    return (
        <ListItem button={true} >
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export const CheckboxItem = ({ key, name, handleChange }) => {
    return (
        <FormGroup>
            <FormControlLabel 
                control={<Checkbox  />} 
                label={name} 
                onChange={(event) => handleChange(name, event.target.checked)}
            />
        </FormGroup>
    )
}

// export default Item;
