import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from '../Footer';

const photos = [
  {
    name: "Breakfast",
    url: "/assets/Reach out to Us! (3)/Try our pancakes.png",
  },
  {
    name: "Lunch",
    url: "/assets/Reach out to Us! (3)/Red Asian Travel Magazine Cover.png",
  },
  {
    name: "Dinner",
    url:
      "/assets/Reach out to Us! (3)/Black and White Soup Photo Recipe Pinterest Graphic.png",
  },
];

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  arrows: true,
  slidesToScroll: 1,
  className: "slides",
};
function Home() {
  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="/assets/Reach out to Us! (3)/1.png"
          alt=" "
        />
      </div>
      <Container style={{ backgroundColor: "#F2F0EF" }}>
        <div>
          <Slider {...settings}>
            {photos.map((photo) => {
              return (
                <div>
                  <img
                    style={{ width: "20%", marginTop: "15em", float: "right" }}
                    src={photo.url}
                  />
                  <h2
                    style={{
                      display: "flex",
                      marginTop: "7em",
                      fontFamily: "fantasy",
                      fontSize: "30px",
                    }}
                  >
                    Morning noon or night, we have got food covered for you.
                  </h2>
                  <div style={{ width: "600px" }}>
                    <p
                      style={{
                        display: "flex",
                        marginTop: "2em",
                        color: "darkGray",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                        fontStyle: "bold",
                        textAlign: "center",
                      }}
                    >
                      We’re on a mission to make plant-centric, wholesome food
                      accessible to everyone. Our meals are hand-made with care,
                      packed with natural, mindfully-sourced ingredients, and
                      delivered sustainably. We're curbing food waste by
                      creating meals that will last in your freezer, and
                      tackling hunger by rescuing and distributing fresh produce
                      with every meal sold.
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
      <Container>
        <div style={{ width: "100%", height: "70%", backgroundColor: "white" }}>
          <h2
            style={{
              fontFamily: "fantasy",
              fontSize: "30px",
              marginTop: "2em",
              textAlign: "center",
            }}
          >
            Healthy, satisfying food should be accessible to everyone.
          </h2>
          <p
            style={{
              marginBottom: "2em",
              color: "darkgray",
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            We believe that everybody deserves to eat well. And we’re committed
            to building a better food system for a greener, healthier world. We
            call it “the fresh take,” and it’s the driving principle behind what
            we do.
          </p>
        </div>
      </Container>

      <Container style={{ backgroundColor: "#F2F0EF" }} className="about">
        <div>
          <img
            src="/assets/Reach out to Us! (3)/2.png"
            style={{ width: "500px", marginLeft : '-2em' }}
          />
          <div style={{ width: "700px", float: "right" }}>
            <h2
              style={{
                display: "flex",
                fontFamily: "fantasy",
                fontSize: "30px",
                float: "right",
              }}
            >
              Our Mission - Good food on every table
            </h2>

            <p
              style={{
                float: "right",

                color: "darkGray",
                fontFamily: "sans-serif",
                fontSize: "20px",
                fontStyle: "bold",
                textAlign: "center",
              }}
            >
              We all want more balanced diets — heavy on plants and rich in
              hearty, whole-food ingredients. Easier said than done. It seems
              like no matter where you are, food options are either too
              time-consuming, too heavy, unsatisfying, or just plain expensive.
              We founded Fresh Meal Plan to change that. Our mission is simple:
              to put good food on every table.
            </p>
           
              
         
          </div>
          
        </div>
      </Container>

      <Container  >
        <div style={{ width: "100%", height: "80%", backgroundColor: "white" }}>
          <h2
            style={{
              fontFamily: "fantasy",
              fontSize: "30px",
              marginTop: "2em",
              textAlign: "center",
            }}
          >
        Our Food Philosophy
          </h2>
          <p
            style={{
              marginBottom: "2em",
              color: "darkgray",
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            We love food, and we’re committed to making it the right way. From the ingredients we source to the people we serve, we strive to do right by our customers, our community, and our world.
          </p>
        </div>
      </Container>

      <Container style={{ backgroundColor: "#F2F0EF" }}>
         <Grid item xs = {12} sm = {12} lg = {12} style = {{ width : '100%', height : '50%'}}>
             <div style = {{width : '70%', height : '30%'}}>
          <img src = '/assets/Reach out to Us! (3)/3.png' style = {{objectFit : 'contain', width : '150%', marginLeft : '-2em'}}/>
          </div>
          </Grid>
      </Container>

      <Container>
        <div style={{ width: "100%", height: "70%", backgroundColor: "white" }}>
          <h2
            style={{
              fontFamily: "fantasy",
              fontSize: "30px",
              marginTop: "2em",
              textAlign: "center",
            }}
          >
         Real impact
          </h2>
          <p
            style={{
              marginBottom: "2em",
              color: "darkgray",
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            We believe the best businesses make the world a better place — and we’re committed to doing just that. We freeze all of our food to help fight America’s food waste epidemic. And for every box that we sell, we work with the non-profit City Harvest to rescue 2 pounds of nutritious food and distribute it to New Yorkers in need.
          </p>
        </div>
      </Container>

      <Container>
          <Grid item xs = {12} sm = {12} lg = {12} style = {{ width : '100%', height : '50%'}}>
          <div style = {{width : '70%', height : '30%'}}>
          <Footer />
          </div>
          </Grid>
         
      </Container>


    </div>
  );
}

export default Home;
