// import CommonCard from "modules/common/components/CommonCard";
// import CommonTextField from "modules/common/components/CommonTextField";
// import PageHeader from "modules/common/components/PageHeader";
// import { makeStyles } from "@material-ui/core/styles"
// import { Component } from "react";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles(theme => ({
//     formRoot: {
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: "30rem"
//         }
//     },
//     input: {
//         marginTop: "1rem"
//     }
// }))

// function StyledForm({ children }){
//     const classes = useStyles()
//     return children(classes)
// }

// export default class AddCarComponent extends Component{
//     state = {
//         car: {
//             name: "",
//             price: "",
//             image: null,
//             description: ""
//         },
//         carError: {
//             name: "",
//             price: null,
//             image: null,
//             description: ""
//         }
//     }

//     submitForm(event){
//         if(event) event.preventDefault()
//         this.props.actionCreateCar(this.state.car)
//     }

//     handleChange(value,key){
//         const currCarInputs = Object.assign({}, this.state.car),
//             currErrors = Object.assign({}, this.state.carError);

//         currCarInputs[key] = value
//         currErrors[key] = ""

//         this.setState({
//             car: currCarInputs,
//             carError: currErrors
//         })
//     }

//     handleFileUpload({
//         target: {
//             validity,
//             files: [file],
//         },
//     }){
//         if(validity.valid){
//             const currCarInputs = Object.assign({}, this.state.car),
//             currErrors = Object.assign({}, this.state.carError);

//             currCarInputs.image = file
//             currErrors.image = ""

//             console.log({file})
            
//             if(file){
//                 this.setState({
//                     car: currCarInputs,
//                     carError: currErrors
//                 })
//             }
//         }
//     }

//     render(){
//         const { car, carError } = this.state

//         return (
//             <StyledForm>
//                 { classes=> (
//                     <CommonCard>
//                         <PageHeader hasBack>
//                             Add Car
//                         </PageHeader>
//                         <form 
//                             className={classes.formRoot}
//                             onSubmit={this.submitForm.bind(this)}
//                             encType="multipart/form-data"
//                         >
//                             <CommonTextField
//                                 label="Name"
//                                 value={car.name}
//                                 errorText={carError.name}
//                                 onChange={e => this.handleChange(e.target.value,'name')}
//                             />

//                             <CommonTextField
//                                 label="Price"
//                                 value={car.price}
//                                 type="number"
//                                 errorText={carError.price}
//                                 onChange={e => this.handleChange(parseFloat(e.target.value),'price')}
//                             />

//                             <input 
//                                 accept="image/x-png,image/jpeg"
//                                 value={car.image?.filename}
//                                 onChange={this.handleFileUpload.bind(this)}
//                                 type="file"/>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 fullWidth
//                                 size="large"
//                                 className={classes.input}
//                                 onSubmit={this.submitForm.bind(this)}
//                             >
//                                 Submit
//                             </Button>
//                         </form>
//                     </CommonCard>
//                 )}
//             </StyledForm>
//         )
//     }
// }


import { useMutation } from '@apollo/client';

export default function AddCarComponent() {

    function handleChange({
        target: {
            validity,
            files: [file],
        },
    }) {
        if (validity.valid) {
            const formData = new FormData();

            formData.append('image', file)
            formData.append('name', "RAHAT AHMED")
            formData.append('price', 123)

            fetch("http://localhost:8182/api/car/create", {
                method: "post",
                body: formData,
                headers: {
                    // 'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Accept': '*/*',
                    // 'Content-Type': 'multipart/form-data',
                },
            })
        }
    }

    return <input type="file" accept="image/x-png,image/jpeg" required onChange={handleChange} />;
}