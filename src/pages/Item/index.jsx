import {Component} from "react";
import {styleSheet} from "../Item/styles";
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packSize: [
                {label: 'Large'},
                {label: 'Medium'},
                {label: 'Small'},
            ],

            formData:{
                code:'',
                name:'',
                price:'',
                packSize:'',
                qtyOnHand:''
            }
        }
    }

    saveItem(){

    }

    render() {

        function createData(code, name, price, packSize, qtyOnHand) {
            return {code, name, price, packSize, qtyOnHand};
        }

        const {classes} = this.props
        const rows = [
            createData('I00-001', 'Frozen yoghurt', 150.0, 'Large', 4),
            createData('I00-002', 'Ice cream sandwich', 200.0, 'Small', 3),
            createData('I00-003', 'Eclair', 350.0, 16.0, 6),
            createData('I00-004', 'Cupcake', 450.0, 'Medium', 2),
            createData('I00-005', 'Gingerbread', 500.0, 'Large', 9),
        ];
        return (
            <div className={classes.container}>
                <div className={classes.title_bar}>
                    <Typography variant="h4">
                        Item Manage
                    </Typography>
                    <Link to="/">
                        <GDSEButton size="small" variant="contained" label="Home"
                                    onClick={() => {

                                    }}
                                    style={{marginLeft: '15px',marginTop:'-5px'}}
                        />
                    </Link>
                </div>
                <div className={classes.text_form}>
                    <div className={classes.text_field}>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Item Code" label="Item Code"
                                           variant="outlined" size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.code = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Name" label="Item name" variant="outlined"
                                           size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.name = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Price" label="Price" variant="outlined"
                                           size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.price = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={this.state.packSize}
                                    sx={{width: 300}}
                                    renderInput={(params) => <TextField {...params} label="Pack Size"/>}
                                    getOptionLabel={
                                        (option) => option.label
                                    }
                                    onChange={(e, value) => {
                                  
                                    }}
                                    size="small"
                                    style={{width: '100%'}}
                                />
                            </Grid>
                           {}
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Qty On Hand" label="Qty On Hand"
                                           variant="outlined" size="small"
                                           onChange={(e) =>{
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.qtyOnHand = e.target.value
                                               this.setState({ formData })
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                  justifyContent="flex-end">
                                <GDSEButton size="small" variant="contained" label="save"
                                            onClick={() => {
                                                this.saveItem()
                                            }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.table_field}>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Code&nbsp;</TableCell>
                                            <TableCell align="right">Name&nbsp;</TableCell>
                                            <TableCell align="right">Price&nbsp;</TableCell>
                                            <TableCell align="right">Pack Size&nbsp;</TableCell>
                                            <TableCell align="right">Qty On Hand&nbsp;</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Item)