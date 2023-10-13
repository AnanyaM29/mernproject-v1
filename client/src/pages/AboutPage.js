import React from "react";
import Layout from "../components/Layouts/Layout";

const AboutPage = ()=>{
    return(
        <Layout title={"About us - Ecommerce app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
            Welcome to Ecommerce App, your trusted online shopping platform.
             We are dedicated to providing high-quality products and a seamless shopping 
             experience for our customers. 
             Our mission is to offer a wide range of products that meet your needs and preferences.
            </p>
          </div>
        </div>
      </Layout>
    );
}

export default AboutPage;