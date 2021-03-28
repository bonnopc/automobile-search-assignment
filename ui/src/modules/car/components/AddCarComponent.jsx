import CommonCard from "modules/common/components/CommonCard";
import CommonTextField from "modules/common/components/CommonTextField";
import PageHeader from "modules/common/components/PageHeader";
import { makeStyles } from "@material-ui/core/styles"
import { Component } from "react";
import Button from "@material-ui/core/Button";
import ImageInput from "modules/common/components/ImageInput";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
    formRoot: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "30rem"
        }
    },
    input: {
        marginTop: "1rem"
    }
}))

function StyledForm({ children }){
    const classes = useStyles()
    return children(classes)
}

class AddCarComponent extends Component{
    state = {
        car: {
            name: "",
            price: "",
            image: null,
            description: ""
        },
        carError: {
            name: "",
            price: null,
            image: null,
            description: ""
        }
    }

    async submitForm(event){
        if(event) event.preventDefault()
        if(this.isValidForm()){
            const response = await this.props.actionCreateCar(this.state.car)

            if(response?.uid){
                this.props.actionShowSnackbar({
                    message: "Car added successfully!",
                    secondaryMessage: "Congratulations! You car has been added to our list.",
                    type: "success"
                })
                this.props.history.push(`/car/${response.uid}`)
            } else {
                this.props.actionShowSnackbar({
                    message: "Something went wrong!",
                    type: "error"
                })
            }
        }
    }

    isValidForm(){
        let isValid = true, currErrors = {...this.state.carError};

        const requiredInputs = ['name','price','image']

        requiredInputs.forEach(key => {
            console.log("this.state.car[key]", this.state.car[key])
            if(!this.state.car[key]){
                isValid = false
                currErrors[key] = "This is required!"
            }
        })

        if(!isValid) this.setState({ carError: currErrors })

        return isValid
    }

    handleChange(value,key){
        const currCarInputs = Object.assign({}, this.state.car),
            currErrors = Object.assign({}, this.state.carError);

        currCarInputs[key] = value
        currErrors[key] = ""

        this.setState({
            car: currCarInputs,
            carError: currErrors
        })
    }

    // handleFileUpload({
    //     target: {
    //         validity,
    //         files: [file],
    //     },
    // }){
    //     if(validity.valid){
    //         const currCarInputs = Object.assign({}, this.state.car),
    //         currErrors = Object.assign({}, this.state.carError);

    //         currCarInputs.image = file
    //         currErrors.image = ""

    //         console.log({file})
            
    //         if(file){
    //             this.setState({
    //                 car: currCarInputs,
    //                 carError: currErrors
    //             })
    //         }
    //     }
    // }

    render(){
        const { car, carError } = this.state

        return (
            <StyledForm>
                { classes=> (
                    <CommonCard>
                        <PageHeader hasBack>
                            Add Car
                        </PageHeader>
                        <form 
                            className={classes.formRoot}
                            onSubmit={this.submitForm.bind(this)}
                            encType="multipart/form-data"
                        >
                            <ImageInput
                                value={car.image}
                                errorText={carError.image}
                                required
                                onChange={file => this.handleChange(file,'image')}
                            />

                            <CommonTextField
                                label="Name"
                                required
                                value={car.name}
                                className={classes.input}
                                errorText={carError.name}
                                onChange={e => this.handleChange(e.target.value,'name')}
                            />

                            <CommonTextField
                                label="Price"
                                required
                                value={car.price}
                                type="number"
                                errorText={carError.price}
                                className={classes.input}
                                onChange={e => this.handleChange(parseFloat(e.target.value),'price')}
                            />

                            <CommonTextField
                                label="Description"
                                value={car.description}
                                multiline
                                rows={4}
                                className={classes.input}
                                onChange={e => this.handleChange(e.target.value,'description')}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                className={classes.input}
                                onSubmit={this.submitForm.bind(this)}
                            >
                                Submit
                            </Button>
                        </form>
                    </CommonCard>
                )}
            </StyledForm>
        )
    }
}

export default withRouter(AddCarComponent)