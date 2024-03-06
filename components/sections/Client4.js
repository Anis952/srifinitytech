'use client'
import { useState } from 'react'

export default function Client4() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <div className="company6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="company6text6">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">How it
                                    Works</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b">Our Work Process</h1>
                                <p className="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30">We have very structured and client-centric approach that defines our
                                 work process, emphasizing collaboration, customization, and long-term success for each of our valued clients.</p>
                            </div>
                            <div className="accordian-area accordian5">
                                <div className="accordion accordian4" id="accordionExample">
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1200}>
                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Discovery and Needs Assessment
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Begin by conducting a comprehensive needs assessment 
                                                for each customer. Understand their unique challenges, goals, and requirements. Tailor your technology consulting services 
                                                to provide customized solutions that address their specific needs and align with their business objectives.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1400}>
                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Strategic Planning and Implementation
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Work collaboratively with clients to develop a strategic plan 
                                                that integrates cutting-edge Microsoft business applications. Outline a roadmap for seamless implementation, ensuring that 
                                                the technology aligns with their overall business strategy. Guide them through each step, 
                                                from planning to execution, to achieve a smooth and efficient integration.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1600}>
                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Implementation and Training
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">With a solid plan in place, we proceed to the implementation phase, 
                                                ensuring a smooth integration of the recommended solutions. Simultaneously, we conduct comprehensive training sessions to equip our clients' 
                                                teams with the skills and knowledge needed to fully leverage the new technologies. 
                                                This step is crucial for fostering user adoption and maximizing the benefits of the implemented solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1800}>
                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Continuous Optimization and Support
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Our commitment extends beyond the initial implementation. 
                                                We prioritize ongoing support, regularly monitoring the performance of the implemented solutions. 
                                                Through continuous optimization, we stay proactive in identifying opportunities for improvement, 
                                                keeping our clients at the forefront of technological advancements and ensuring sustained success in their business endeavors.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1600}>
                            <div className="companyimgaes">
                                <img src="/assets/images/sectionimg/companyimg2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor37.png" alt="" className="elementor-16" />
                <img src="/assets/images/elementor/elementor38.png" alt="" className="elementors5" />
            </div>
        </>
    )
}
