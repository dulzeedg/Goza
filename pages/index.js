import Head from  'next/head'



export default function Home() {
  return (
    <div>
      {/* <!DOCTYPE html> */}
      {/* <html lang="en" dir="ltr"> */}
      <head>
        {/* <meta charset="utf-8"/>
        <meta name="viewport" content="width=device, initial-scale=1, shrink-to-fit=no"/>

        {/* <!-- stylesheet --> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>

        {/* <!-- font awesome --> */}

        {/* <!-- script --> */}
        {/* <script defer src="https://use.fontawesome.com/releases/v5.13.1/js/all.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> */}
        <title>Goza</title>
      </head>

      <main>
        <body>
          {/* <!-- Navigation section --> */}
            <div class="container-fluid">
              <nav class="navbar navbar-expand-sm">
                <a class="navbar-brand" href="#">Goza</a>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                  </li>
                </ul>
              </nav>
            </div>
          {/* <!-- Profile Section --> */}
          <section id="profile">
            <div class="profile image">
              <h1>Hello, I'am Goza</h1>
              <p id="p">a Web developer</p>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="profile col-md-4">
                  <u><h3>About me</h3></u>
                  <p>Short black dude!</p>
                  <p>Electronic Enthusiast</p>
                  <p>Custom Built</p>
                </div>
                
                {/* <!-- Photo --> */}
                <div class="col-md-4 img">
                  <img src="Goza.jpg" alt="Image-of-Goza"></img>
                </div>
                <div class="col-md-4 details">
                  <u>
                    <h3>Details</h3>
                  </u>
                  <p>
                    {/* <b>Name:</b>
                    <br>Gwoza Hills</br> */}
                  </p>
                  <p>
                    {/* <b>Age:</b>
                    <br>27years</br> */}
                  </p>
                  <p>
                    <b>Location:</b>
                    {/* <br> Borno, Nigeria</br> */}
                  </p>
                  <a href="https://Twitter.com/@dulzeedg">
                    <p class="btn btn-outline-light">Twitter</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
            <div class="container breaker">
              <div class="col-md-12">
              </div>
            </div>
          <section class="experience">
            <div class="body">
              <h2>Experience</h2>
            </div>
            <div class="container-fluid">
              <span><h3>Computer Engineering</h3></span>
              <div class="row">
                <div class="col-md-4">
                  <h4>Software Development</h4>
                  <p>Software Engineering</p>
                </div>
                <div class="col-md-8">
                  <h4>Machine Learning</h4>
                  <p>Artificial Intelligence</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <h4>Internet of Things</h4>
                  <p>2005 - 2011</p>
                </div>
                <div class="col-md-8">
                  <h4>Open Source Hardware</h4>
                  <p>Electronics Engineering</p>
                </div>
              </div>
              <span><h3>Career</h3></span>
              <div class="row">
                <div class="col-md-4">
                  <h3>Projects</h3>
                  <h4>Programming Languages</h4>
                  <p>C/C++, Python, C#, Javascript</p>
                </div>
                <div class="col-md-8">
                  <h4>Tech Stack</h4>
                  <p>;</p>
                </div>
              </div>
            </div>
          </section>
            <div class="container breaker">
              <div class="col-md-12">
              </div>
            </div>
      
          {/* <!-- project --> */}
          <section class="project">
            <div class="container">
            </div>
          </section>
            <div class="container breaker">
              <div class="col-md-12">
              </div>
            </div>
        </body>
    
        <footer>
          <h3>Contact</h3>
          <a href="https://github.io/@dulzeedg"><i class="fab fa-github fa-4x" aria-hidden="true"></i></a>
          <a href="https://Twitter.com/@dulzeedg"><i class="fab fa-twitter fa-4x" aria-hidden="true"></i></a>
          <a href="https://facbook.com/@dulzeedg"><i class="fab fa-facebook fa-4x"></i></a>
        </footer>
      </main>
    </div>
  )
}
