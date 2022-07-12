import {Component} from "react";
import {styleSheet} from "../Customer/styles";
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

class Customer extends Component {
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
                email:'',
                address:'',
                salary:'',
                contact:''
            }
        }

    }
    render() {

        function createData(code, name,email, address, salary, contact) {
            return {code, name,email, address, salary, contact};
        }

        const {classes} = this.props
        const rows = [
    
        ];
        return (
            <div className={classes.container}>
                <div className={classes.title_bar}>
                    <Typography variant="h4">
                        Customer Manage
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
                        <Grid container spacing={4}>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Customer Code" label="Customer Code"
                                           variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.code = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Customer Name" label="Customer Name"
                                            variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.name = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="E-mail" label="E-mail"
                                          variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.email = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Address" label="Address"
                                variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.address = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Salary" label="Salary"
                                           variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.salary = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Contact" label="Contact"
                                            variant="filled" size="medium"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.contact = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '60%'}}/>
                            </Grid>
                            <Grid item lg={32} md={13} sm={13} xm={12} style={{display: 'flex'}}
                                  justifyContent="inherit">
                                <GDSEButton size="155px" variant="contained" label="save"
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
                                            <TableCell align="right">Email&nbsp;</TableCell>
                                            <TableCell align="right">Address&nbsp;</TableCell>
                                            <TableCell align="right">Salary&nbsp;</TableCell>
                                            <TableCell align="right">Contact&nbsp;</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}
                                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                <TableCell component="th" scope="row">{row.code}</TableCell>
                                                <TableCell align="right">{row.name}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">{row.address}</TableCell>
                                                <TableCell align="right">{row.salary}</TableCell>
                                                <TableCell align="right">{row.contact}</TableCell>
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

export default withStyles(styleSheet)(Customer)