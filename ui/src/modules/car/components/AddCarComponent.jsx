import CommonCard from "modules/common/components/CommonCard";
import CommonTextField from "modules/common/components/CommonTextField";
import PageHeader from "modules/common/components/PageHeader";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import ImageInput from "modules/common/components/ImageInput";
import { withRouter } from "react-router";
import StyledForm from "modules/common/styledComponents./StyledForm";

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

    componentDidMount(){
        if(this.isUpdating()) this.getCarDetails()
    }

    isUpdating(){
        const { uid } = this.props.match.params

        return uid;
    }

    async getCarDetails(){
        const { uid } = this.props.match.params

        const _car = await this.props.actionGetCarByUid(uid)

        if(_car){
            const { name, price, image, description } = _car

            this.setState({
                car: { name, price, image, description }
            })
        }
    }

    async submitForm(event){
        console.log("preventDefault")
        if(event) event.preventDefault()
        console.log("submitForm")
        if(this.isValidForm()){
            const { uid } = this.props.match.params;
            const response = this.isUpdating() ?
                await this.props.actionUpdateCar({...this.state.car, uid }) :
                await this.props.actionCreateCar(this.state.car)

            if(response?.uid){
                this.props.actionShowSnackbar({
                    message: `Car ${this.isUpdating() ? "updated": "added"} successfully!`,
                    secondaryMessage: `Congratulations! You car has been ${this.isUpdating() ? "updated": "added to our list"}.`,
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
            if(!this.state.car[key]){
                isValid = false
                currErrors[key] = "This is required!"
            }
        })

        if(!isValid) this.setState({ carError: currErrors })

        console.log("isValid", isValid)

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

    render(){
        const { car, carError } = this.state

        return (
            <StyledForm>
                { classes=> (
                    <CommonCard>
                        <PageHeader hasBack>
                            {this.isUpdating() ? "Update" : "Add"} Car
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