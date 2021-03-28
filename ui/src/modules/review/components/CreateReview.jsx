import Button from "@material-ui/core/Button";
import CommonDialog from "modules/common/components/CommonDialog";
import StyledForm from "modules/common/styledComponents./StyledForm";
import { Component, Fragment } from "react";
import Rating from '@material-ui/lab/Rating';
import CommonTextField from "modules/common/components/CommonTextField";
import FormLabel from '@material-ui/core/FormLabel';
import Grid from "@material-ui/core/Grid";
import InlineLoader from "modules/common/components/InlineLoader";

export default class CreateReview extends Component {
    reviewObj = {
        name: "",
        comment: "",
        rating: 0
    }

    reviewErrObj = {
        name: "",
        comment: "",
    }
    
    state = {
        review: {...this.reviewObj},
        reviewErr: {...this.reviewErrObj},
        isCreating: false
    }

    componentDidUpdate(prevProps){
        if(!this.props.isOpen && prevProps.isOpen) this.resetInputs();
    }

    resetInputs(){
        this.setState({ 
            review: {...this.reviewObj},
            reviewErr: {...this.reviewErrObj},
            isCreating: false
        })
    }

    async handleSubmit(event){
        if(event) event.preventDefault()
        if(this.isValidForm()){
            this.setState({ isCreating: true })
            const createResponse = await this.props.actionCreateReview({
                carUid: this.props.carUid,
                ...this.state.review
            })

            console.log("handleSubmit", createResponse)

            if(createResponse?._id){
                this.props.actionShowSnackbar({
                    message: "Congratulations! Your review has been added!",
                    secondaryMessage: "You review has been added to the list.",
                    type: "success"
                })
                this.props.onCreate(createResponse)
            } else {
                this.props.actionShowSnackbar({
                    message: "Something went wrong!",
                    type: "error"
                })
                this.setState({ isCreating: false })
            }
        }
    }

    isValidForm(){
        let isValid = true, currErrors = {...this.state.reviewErr};

        const requiredInputs = ['name','comment']

        requiredInputs.forEach(key => {
            if(!this.state.review[key]){
                isValid = false
                currErrors[key] = "This is required!"
            }
        })

        if(!isValid) this.setState({ reviewErr: currErrors })

        return isValid
    }

    handleChange(value,key){
        const currInputs = Object.assign({}, this.state.review),
            currErrors = Object.assign({}, this.state.reviewErr);

        currInputs[key] = value
        currErrors[key] = ""

        this.setState({
            review: currInputs,
            reviewErr: currErrors
        })
    }

    render(){
        const { isOpen, onClose, carName } = this.props, 
            { review, reviewErr, isCreating } = this.state;

        return (
            <CommonDialog
                isOpen={isOpen}
                onClose={onClose}
                header={`Add a Review ${carName ? `for ${carName}` : ''}`}
                removeFullScreenFromSm
                keepMounted={isCreating}
                content={(
                    isCreating ?
                    <InlineLoader/> :
                    <StyledForm>
                        {classes => (
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <CommonTextField
                                    label="Name"
                                    required
                                    value={review.name}
                                    className={classes.input}
                                    errorText={reviewErr.name}
                                    onChange={e => this.handleChange(e.target.value,'name')}
                                />
                                <CommonTextField
                                    label="Comment"
                                    required
                                    value={review.comment}
                                    multiline
                                    rows={4}
                                    className={classes.input}
                                    errorText={reviewErr.comment}
                                    onChange={e => this.handleChange(e.target.value,'comment')}
                                />

                                <Grid 
                                    container
                                    className={classes.inputWithLabel}
                                    spacing={1}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        <FormLabel>Enter your rating</FormLabel>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={8}
                                    >
                                        <Rating
                                            value={review.rating}
                                            name="rating"
                                            size="large"
                                            precision={0.5}
                                            onChange={(e,val) => this.handleChange(val,'rating')}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </StyledForm>
                )}
                footer={(
                    <Fragment>
                        <Button
                            size="large"
                            color="primary"
                            disabled={isCreating}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            disabled={isCreating}
                            color="primary"
                            onClick={this.handleSubmit.bind(this)}
                        >
                            Submit
                        </Button>
                    </Fragment>
                )}
            />
        )
    }
}