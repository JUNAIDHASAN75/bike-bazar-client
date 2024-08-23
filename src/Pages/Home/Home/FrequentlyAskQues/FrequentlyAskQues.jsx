import askQuesImg from "../../../../assets/images/others/faq.png"
const FrequentlyAskQues = () => {
    return (
        <div>
            <h2 className="text-center text-[#0D0925] text-5xl font-semibold mb-28">Frequently Asked <span className="text-[#E76F51]"> Questions</span></h2>
            <div className="md:flex items-center">
                <div className="w-full">
                    <img className=" mx-auto" src={askQuesImg} alt="" />
                </div>
                <div className="w-full">
                    <div className="join join-vertical rounded-md w-full space-y-3">
                        <div className="collapse collapse-arrow join-item border-slate-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">What are the most important things I should
                            know about riding a bike?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">How can I tell if my helmet is old and I need a 
                            new one?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">My bike has been in storage is it safe to ride?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-slate-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">What rules should I follow when riding my bike?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskQues;