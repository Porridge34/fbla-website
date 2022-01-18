'use-strict';

class Review extends React.Component {
    processLogin(form) {
        console.log(form.username)
    }
    render() {
        if (!document.cookie.includes("username")) {
            return (
                <div>
                    <link rel="stylesheet" href="bootstrap.min.css" />
                    <button id = "centerbutton" class="btn btn-primary btn-lg"><a href = "login.html"><h3>Log in to leave a review!</h3></a></button>
                </div>
              );
        }
        else {
            return (
                <div>
                    <link rel="stylesheet" href="bootstrap.min.css" />
                    <form>
                        <fieldset>
                            <div class="form-group">
                                <label for="title-review" class="form-label mt-4">Title of review</label>
                                <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter title"></input>
                            </div>
                            <div class="form-group">
                                <label for="review-content" class="form-label mt-4">Review</label>
                                <input type="text" class="form-control" placeholder="Enter review"></input>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary dumb-button" onClick="processLogin(this.form)">Submit</button>
                            <br/>
                            <br/>
                        </fieldset>
                    </form>
                </div>
            );
        }
    }
  }

  let domContainer = document.querySelector('#review_');
  ReactDOM.render(<Review />, domContainer);