
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={6} breadcrumbTitle="Our Services v2">
                <div>
                    <div className="servicev1-section-area section-padding5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="servicev1-textarea margin-b60 text-center">
                                        <h1 className="font-48 font-lora weight-600 color-29 lineh-56">We Offer Comprehensive Approach To
                                            Business technology consultant</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle2">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Dynamics 365 Finance and Operations </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                    Dynamics 365 Finance and Operations experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle2" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    
                                </div>
                              <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle3">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Microsoft 365 </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                    Microsoft 365 experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle3" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle4">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Technical Support/ Managed Services </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Welcome to a world of seamless operations and peace of mind with our top-notch Technical Support and Managed Services. Our commitment is to ensure that your business runs smoothly, without interruption, and with optimal performance.</p>
                                                    <Link href="/servicemiddle4" className="font-nunito font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle5">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Dynamics 365 Customer Relationship Management /Power Platform </h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Welcome to a world of tailored solutions and unparalleled customer engagement with our comprehensive suite of services centered around Dynamics 365 Customer Relationship Management (D365 CRM) and the Power Platform. </p>
                                                    <Link href="/servicemiddle5" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img4.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Estate
                                                            Planning</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img5.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                                
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Invesment
                                                            Managment</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img6.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Regulatory
                                                            Consulting</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img7.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="service3-boxarea margin-b30 bgservice2">
                                        <div className="row">
                                            <div className="col-lg-6 ">
                                                <div className="service3-text2">
                                                    <Link href="/servicemiddle">
                                                        <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">Real Estate
                                                            Consulting</h1>
                                                    </Link>
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30">Our team comprises certified
                                                        financial experts with years of experience in diverse areas of finance.</p>
                                                    <Link href="/servicemiddle" className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2">Learn
                                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="service3-imag1">
                                                    <img src="/assets/images/sectionimg/servicev1img8.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                    </Link>
                                                </li>
                                                <li className="page-item pagecolor"><Link className="page-link" href="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">...</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">12</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>






                            
                        </div>
                    </div>
                    {/*===== SERVCEV2 END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get In Touch</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">Embark on a journey of digital transformation with Srifinity Tech. Contact us today to discover how our expertise and commitment to excellence can elevate your business to new heights.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact2" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get in Touch
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                            <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                </div>

            </Layout>
        </>
    )
}