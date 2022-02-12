import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles } from '@material-ui/core/';
// import Item from '../components/Item';
import Card from '../components/Card';
import { CheckboxItem } from '../components/Item'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {

    const url = 'http://localhost:5000/product'
    const [filter, setFilter] = useState(false);
    const [filterName, setFilterName] = useState(false);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);

    var data = [];
    // const productsList = useSelector(state => state.products)
    const classes = useStyles();

    useEffect( async () => {

        // let data = [];

        try {
            const response = await fetch(url)
            data = await response.json();
            // setProducts(data);
            console.log(data);
        }catch(e) {
            alert("O backend, api-dioshopping, precisa ser iniciado!");
        }

        
        const categorys = data.map(
            category => {
                const container = { };
                container['id'] = category.id_categorys;
                container['name'] = category.name_categorys;
                return container;
            }
        )
    
        let category = categorys.map(JSON.stringify)
            .filter(function (item, index, arr) {
                return arr.indexOf(item, index + 1) === -1;
            })
            .map(JSON.parse); 

            if( !filter ) {
                setCategory( category );

                setProducts(data);
            } else {
                setCategory( category.filter( (item) => {
                    return item.name === filterName
                }) );

                setProducts(data.filter( (item) => {
                    return item.name_categorys === filterName
                }));
            }

    }, [filter])

    const handleCheckbox = (name, checkBoxState) => {
        
        setFilter( checkBoxState );
        setFilterName( name );
        console.log(`CheckBox ${name} modificada`)
    }
    

    return(
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        {category.map(
                            category => {
                                return (
                                    <CheckboxItem
                                        key = {category.id} 
                                        name= {category.name}
                                        handleChange= {handleCheckbox}
                                    />
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
