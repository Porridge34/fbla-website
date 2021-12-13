class NavBar extends React.Component {
    render() {
      return (
		<div class = "nav-bar">
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">CSimplified</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
		  
			  <div class="collapse navbar-collapse" id="navbarColor01">
				<ul class="navbar-nav me-auto">
				  <li class="nav-item">
					<a class="nav-link" href="index.html">Home</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="mission.html">Mission</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link active" href="getcsimplified.html">Get CSimplified</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link " href="about.html">Reviews</a>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
					<div class="dropdown-menu">
					  <a class="dropdown-item" href="socials.html">Our Socials</a>
					  <a class="dropdown-item" href="contactus.html">Contact Us</a>
					</div>
				  </li>
				</ul>
			  </div>
			</div>
		  </nav>
		</div>
      );
    }
  }

  return React.createElement('div', {className: 'nav-bar'})