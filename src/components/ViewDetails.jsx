import { PDFViewer } from "@react-pdf/renderer";
import TicketCard from "./TicketCard";
import { useLoaderData, useLocation } from "react-router-dom";
import TicketPDF from "./TicketPDF";

const ViewDetails = () => {
    const ticket = useLoaderData();
    console.log(ticket);
    

    return (
        <PDFViewer style={{ width: '100%', height: '100vh'}}>
            <TicketPDF ticket={ticket}/>
        </PDFViewer>
    );
};

export default ViewDetails;