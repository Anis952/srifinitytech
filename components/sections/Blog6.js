
import Link from "next/link"

export default function Blog6() {
    return (
        <>

            <div className="BLOG6-SECTION-6AREA section-padding">
                <img src="/assets/images/elementor/elemenor39.png" alt="" className="elementors6" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog6text6 text-center margin-b60">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">Testimonials</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b">Our latest news  blog</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="blog2-author-area">
                                <div className="blog2-images" data-aos="zoom-out" data-aos-duration={1200}>
                                    <img src="/assets/images/sectionimg/blog6img1.png" alt="" />
                                </div>
                                <div className="blog-auhtor2-text blog2-author-poition " data-aos="zoom-out" data-aos-duration={1400}>
                                    <div className="blog2-ahtuor2 blog-2ahthor blog5auhto6 blog6scetio7">
                                        <div className="blog-date-list margin-b">
                                            <img src="/assets/images/icons/daterane.png" alt="" />
                                            <Link href="#" className="font-16 lineh-16 font-nunito weight-600 colorwel ts">1 April
                                                2024</Link>
                                        </div>
                                        <Link href="/blogmiddle" className="ts">
                                            <h1 className="font-20 font-lora colorwel lineh-20 weight-600 margin-b ts">Empowering Your Business with the Power Platform
</h1>
                                        </Link>
                                        <p className="font-16 font-nunito lineh-26 weight-400 colorwel ts ">In today's hyper-competitive business landscape, organizations are constantly seeking ways to drive innovation,enhance productivity, and deliver superior experiences to customers and employees.Amidst this pursuit of excellence, the Microsoft Power Platform has emerged as a transformative solution, empowering businesses to unlock their full potential through low-code and no-code development tools.</p>
                                        <Link href="/blogmiddle" className="font-16 font-nunito weight-700 colorwel margin-t28 lineh-26 d-inline-block learn-more learn-more1 ts">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog2-author-area">
                                <div className="blog2-images" data-aos="zoom-out" data-aos-duration={1400}>
                                    <img src="/assets/images/sectionimg/service5img1.png" alt="" />
                                </div>
                                <div className="blog-auhtor2-text blog2-author-poition" data-aos="zoom-out" data-aos-duration={1400}>
                                    <div className="blog2-ahtuor2 blog-2ahthor blog5auhto6 blog6scetio7">
                                        <div className="blog-date-list margin-b">
                                            <img src="/assets/images/icons/daterane.png" alt="" />
                                            <Link href="/blogmiddle2" className="font-16 lineh-16 font-nunito weight-600 colorwel ts">1 April
                                                2024</Link>
                                        </div>
                                        <Link href="/blogmiddle2" className="ts">
                                            <h1 className="font-20 font-lora colorwel lineh-20 weight-600 margin-b ts">Exploring the Power Platform's Impact Across Industries</h1>
                                        </Link>
                                        <p className="font-16 font-nunito lineh-26 weight-400 colorwel ts ">In today's digital age, organizations across industries are harnessing the power of technology to drive innovation, streamline operations, and enhance productivity.</p>
                                        <Link href="/blogmiddle2" className="font-16 font-nunito weight-700 colorwel margin-t28 lineh-26 d-inline-block learn-more learn-more1 ts">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor40.png" alt="" className="elemnetors7" />
            </div>
        </>
    )
}
