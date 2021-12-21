'use-strict';
class Review extends React.Component {
    render() {
        if (loggedIn == False) {
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
                                <label for="username" class="form-label mt-4">Username</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary dumb-button">Submit</button>
                            <br/>
                            <br/>
                        </fieldset>
                    </form>
                </div>
            );
        }
    }
  }

  let domContainer = document.querySelector('#review');
  ReactDOM.render(<Review />, domContainer);