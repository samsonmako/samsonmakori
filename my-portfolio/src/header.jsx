import { Link } from "react-router-dom";



function message() {
  return (
    <>
    
    <header>
<h1>MY PORTFOLIO</h1>


<nav>
<Link to ="/"> Home </Link>
<Link to ="/about"> About </Link>
<Link to ="/contact"> Contact </Link>
</nav>
    </header>
    
    
    </>
  );
}

export default message;