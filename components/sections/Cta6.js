
import Link from "next/link"

export default function Cta6() {
    return (
        <>

            <div className="cta6-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta6sectiontxt">
                                <h1 className="font-lora font-44 lineh-52 weight-600 color ts margin-b">Get expert advice on our Technology to elevate your busniess growth.</h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-21">Embark on a transformative journey by consulting with our experts to 
                                elevate your business. Our seasoned professionals bring a wealth of knowledge and strategic insights to the table, guiding you 
                                through tailored solutions that align with your unique goals. From in-depth assessments to personalized strategies, 
                                our consulting services are designed to unlock the full potential of your business, driving growth, efficiency, and 
                                sustained success. Elevate your business with the expertise that makes a difference.</p>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                        <div className="col-lg-4">
                            <div className="cta5btnarea5">
                                <Link href="/contact1" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block cta5btn ts">Schedule An
                                    Apointment</Link>
                                <Link href="/contact2" className="font-nunito font-16 lineh-16 weight-700 color-h5 d-inline-block cta5btn5 ts">Contact
                                    Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
