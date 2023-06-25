import React from 'react'
import HeroSection from './components/HeroSection'
import styled from 'styled-components'

const About = () => {

  const data={
    name:"You&Me Ecommerce",
  }
  return (
    <>
  <HeroSection myData={data}/>
  <Wrapper>
  <div className="container">
            <div className="grid grid-two-column">
              {/* Our Homepage Image */}
              <div className="hero-section-image">
                    <figure>
                        <img src="https://corporate.flipkart.net/assets/images/technology-image.png" alt="loading" className='img-style'/>
                    </figure>
                </div> 
                <div className="hero-section-data">                                
                    <p className="intro-data">Technology At ShopEverything</p>
                    <h1>Innovation</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque odit necessitatibus obcaecati amet soluta odio facilis ea! Dolorem itaque reiciendis error. Unde, delectus exercitationem optio similique totam officiis accusantium.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam neque odit necessitatibus obcaecati amet soluta odio facilis ea! Dolorem itaque reiciendis error. Unde, delectus exercitationem optio similique totam officiis accusantium.
                    </p>
                    <Button>Read More</Button>
                </div>
                
            </div>                    
        </div>
  </Wrapper>
  </>
  )
}
const Wrapper = styled.section`
padding: 12rem 0;

.container {
    max-width: 120rem;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }

.img{
    min-width:10rem;
    height:10rem;
}

.hero-section-data{
    p{
        margin:2rem 0;
    }

    h1{
        text-transform:capitalize;
        font-weight:bold;
    }

    .intro-data{
        margin-bottom:0;
    }
}

    .hero-section-image{
        width:100%;
        height:auto;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    figure{
        position:relative;

        &::after{
        content: "";
        width: 60%;
        height: 80%;
        background-color: rgba(81,56,238,0.8);
        position:absolute;
        left:50%;
        top:-5rem;
        z-index:-1;
        }
    }

    .img-style{
        width:100%;
        height:auto;
    }

@media(max-width: ${({theme})=>theme.media.mobile}){
    .grid{
        gap:10rem;
    }
    figure::after{
        content:"";
        width:50%;
        height: 100%;
        left: 0;
        top: 10%;
    }
}


`;
const Button=styled.button`
text-decoration: none;
max-width: auto;
background-color: rgb(138 28 157);
color: rgb(255 255 255);
padding: 1.4rem 2.4rem;
border: none;
text-transform: uppercase;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
-webkit-transition: all 0.3s ease 0s;
-moz-transition: all 0.3s ease 0s;
-o-transition: all 0.3s ease 0s;

&:hover,
&:active {
  box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: scale(0.96);
}

a {
  text-decoration: none;
  color: rgb(255 255 255);
  font-size: 1.8rem;
}
`;
export default About
