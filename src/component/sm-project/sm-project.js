import { React } from 'react';
import './sm-project.css'
import imageWorking from './working.jpg'
import foodIcon from './food.png'
import healthyIcon from './health.png'
import travelIcon from './travel.png'
import ecommerceIcon from './ecommerce.png'
function SmProject() {
    return(
        <div className="sm-project-body">
            <div className="sm-project-text">Project</div>
            <div className="w3-row">
                <div className="w3-col m5 w3-hide-small">
                    <img src={imageWorking} className=" w3-image" alt="Table Setting"/>
                </div>
                <div className="w3-col m7 w3-padding-large">
                    <div className="w3-row">
                        <div className="w3-col m6">
                            <div><img src={foodIcon} className=" w3-image sm-project-item-img" alt="Table Setting"/></div>
                            <div className="sm-project-item-text">Food Planner</div>
                        </div>
                        <div className="w3-col m6">
                            <div><img src={travelIcon} className=" w3-image sm-project-item-img" alt="Table Setting"/></div>
                            <div className="sm-project-item-text">Go Travel</div>
                        </div>
                        <div className="w3-col m6">
                            <div><img src={healthyIcon} className=" w3-image sm-project-item-img" alt="Table Setting"/></div>
                            <div className="sm-project-item-text">Healthy One</div>
                        </div>
                        <div className="w3-col m6">
                            <div><img src={ecommerceIcon} className=" w3-image sm-project-item-img" alt="Table Setting"/></div>
                            <div className="sm-project-item-text">Smart Market</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmProject