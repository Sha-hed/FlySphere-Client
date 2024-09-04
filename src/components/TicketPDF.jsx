import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import goZayaan from '../assets/images/logo2.jpg'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 20,
        padding: 10,
        flexGrow: 1
    },
    horizontalLine: {
        marginTop: 5,
        marginBottom: 10,
        height: 1,
        backgroundColor: '#000',
    },
    table: {
        display: "table",
        width: "auto",
        marginTop: 20,
        marginBottom: 20,
        border: 'dotted 2px black'
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#E4E4E4",
        padding: 5,
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        padding: 5,
    },
    tableCellHeader: {
        fontSize: 10,
        fontWeight: "bold",
    },
    tableCell: {
        fontSize: 10,
    },
    viewOne: {
        flexDirection: 'row',          // Add this line to set horizontal layout
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 0 10px'          // Optional: To align items vertically in the center
    }
});

const TicketPDF = ({ ticket }) => {
    const { _id: id, Name, userEmail, email, phone, totalTraveller, price, ticketClass, travelDate, flight } = ticket
    const {Flight_Name, Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time } = flight
    return (
        <Document style={{ width: '100%', height: '100vh' }}>
            <Page size="A4">
                <View style={styles.section}>
                    <Image style={{ width: '30px' }} src={goZayaan}></Image>
                    <Text style={{ fontSize: '12px' }}>www.shafabd.com</Text>
                    <View style={styles.horizontalLine}></View>  {/* Horizontal Line */}
                    <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>E-Ticket</Text>

                    {/* Table */}
                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Name</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Email</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Passenger Type</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>E-Ticket Number</Text>
                            </View>
                        </View>

                        {/* First Data Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{Name}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{email}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Adult</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{id}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewOne}>
                        <Text style={{ fontSize: '12px' }}>{From} To {To}</Text>
                        <Image style={{ width: '100px' }} src={image}></Image>
                    </View>
                    <View style={styles.table}>
                        {/* Table Header */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Date</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Time</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Flight Info</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Flight Time</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text style={styles.tableCellHeader}>Flight Number</Text>
                            </View>
                        </View>

                        {/* First Data Row */}
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{travelDate}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{Departure_Time}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Departs {From}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{Total_Time} min</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{Flight_Name}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{travelDate}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{Arrival_Time}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Lands in {To}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{id}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{ticketClass} Class</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TicketPDF;