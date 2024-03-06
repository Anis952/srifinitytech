
import Link from "next/link"

export default function About6() {
    return (
        <>

            <div className="abouthome6-section-areas section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="home6about" data-aos="zoom-out" data-aos-duration={1200}>
                                <img src="/assets/images/sectionimg/abouthome6img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="homeaboutimages" data-aos="zoom-out" data-aos-duration={1400}>
                                <img src="/assets/images/sectionimg/abouthomeimg1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="aboutsecond-area margin-t50">
                                <div className="row align-items-center">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration={800}>
                                        <div className="about6-second-txetxarea">
                                            <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">About
                                                Us</span>
                                            <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b20" data-aos="fade-right" data-aos-duration={1200}>Let us partner with you to
                                                transform your business with Microsoft Technology </h1>
                                            <p className="font-nunito font-16 weight-500 color-nuni margin-b20 lineh-26">Unlock the full potential of your
                                             business with our specialized technology consulting services. From comprehensive Business requirement analysis to
                                             strategic risk management, we are committed to guiding you towards optimal decision-making. Collaborate with
                                             us to craft a tailor-made technical solution and proficiently manage your resources. </p>
                                            <p className="font-nunito font-16 weight-500 color-nuni lineh-26">Embark on your digital revolution with us, as we work together
                                             to turn your business aspirations into tangible success. Take the first step by scheduling a consultation today.
                                             Let's explore how our expertise can be precisely tailored to meet your specific business needs.</p>
                                            <div className="div" data-aos="fade-up" data-aos-duration={1400}>
                                                <Link href="/about" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block home5btn7 ts margin-t32">Transform
                                                    Your Business</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="animationdiv" data-aos="fade-right" data-aos-duration={1200}>
                                            <div className="abouthome6-boxarea margin-b30">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/document5.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">Understanding
                                                        your goals</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">The first
                                                        and most crucial step is understanding your unique business aspirations
                                                        and challenges. To help you better, we want to understand the core principal of your business and pain points.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="animatiodiv" data-aos="fade-right" data-aos-duration={1400}>
                                            <div className="abouthome6-boxarea margin-b30">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/calculation2.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">Digital Onboarding & Process Automation</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts"> Transform your onboarding experience seamlessly within the Microsoft ecosystem. 
                                                    Our digital solutions empower organizations to enhance efficiency, foster collaboration, and drive innovation. Join us for a transformative journey into
                                                     the future of work, tailored to meet the unique needs of businesses both locally and globally.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="animationdiv" data-aos="fade-right" data-aos-duration={1600}>
                                            <div className="abouthome6-boxarea">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/financial2.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">AI Enabled Business Technology</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">Elevate your data analysis capabilities with our AI solutions,
                                                     catering to both local businesses in Nepal and those operating on a global scale within the Microsoft ecosystem. Our cutting-edge
                                                      technology empowers customers to harness the power of AI for robust data analysis. Whether you're navigating the local market
                                                       dynamics or engaging on the global stage, we provide tailored solutions to unlock valuable insights and drive informed decision-making.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
