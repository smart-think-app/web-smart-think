import { React } from 'react';
import './sm-introduce.css'
import image from './image_introduce.jpg'
function SmIntroduce() {
    return(
        <div>
            <div className="w3-row w3-padding-64 sm-introduce-body">
                <div className="w3-col m6 w3-padding-large sm-introduce-right">
                    <div>
                        <h1 className="w3-center sm-introduce-right-text">Smart Ecosystem</h1>
                        <br/>
                        <h4 className="w3-center sm-introduce-right-text">Base on microservices and 
                        data science, research and develop application to solve problem abount Healthy,
                        Travel and Ecommerce</h4>
                        <br/>
                        <h4 className="w3-center sm-introduce-right-text">We use data to improve the quality of your life, make it more
                        beautiful , easier and better</h4>
                    </div>
                </div>
                <div className="w3-col m6 w3-hide-small">
                    <img src={image} className=" w3-image" alt="Table Setting"/>
                </div>
            </div>
        </div>
    )
}

export default SmIntroduce;