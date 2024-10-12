import OfferCard from "../../../components/OfferCard";

const HotDeals = () => {
    return (
        <div className="bg-gray-200">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col space-y-10 px-2 md:px-0">
                    <h1 className="text-xl md:text-5xl text-blue-900 font-semibold">Start planning your next trip</h1>
                    <h1 className="text-lg">Thinking of travelling somewhere soon? Here are some options to help you get started.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-2 md:px-0">
                    {
                        offersArray?.map((offer, id) =><OfferCard
                        key={id} offer={offer}></OfferCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HotDeals;
const offersArray = [
    {
        image: "https://i.ibb.co.com/FV8S8Bs/Visa.jpg",
        title: "Exclusive Offer for VISA card Holders",
        offer: "Save up to 10%*"
    },
    {
        image: "https://i.ibb.co.com/r5ZP68C/Coxs.png",
        title: "Fly To Cox's Bazar",
        offer: "Fares starting from BDT 11,000"
    },
    {
        image: "https://i.ibb.co.com/zShGjPd/Sylhet.jpg",
        title: "Discover the Beauty of Sylhet",
        offer: "Learn More"
    },
    {
        image: "https://i.ibb.co.com/ykwJxYL/Journey.png",
        title: "Elevate your experience",
        offer: "Purchase add-ons"
    }
];